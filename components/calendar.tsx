"use client";
import { useState, useEffect } from "react";
import { Calendar, Mail, Clock, CheckCircle } from "lucide-react";
import { format } from "date-fns";

// Import shadcn components
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface TimeSlot {
  _id: string;
  startTime: string;
  endTime: string;
  dayOfWeek: string;
  isAvailable: boolean;
}

interface AppointmentDetails {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  notes: string;
  date: string;
  time: string;
  psychologist: string;
  confirmationCode: string;
}

const CalendarModal = () => {
  // Client information
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [notes, setNotes] = useState("");
  const [validEmail, setValidEmail] = useState(true);

  // Booking state
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<
    "email" | "select-date" | "select-time" | "confirm"
  >("email");
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [appointmentDetails, setAppointmentDetails] = useState<AppointmentDetails | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Psychologist data
  const psychologist = {
    name: "Kriti Monga",
    specialty: "Sports Psychology",
    duration: 30,
  };

  // Add new state for time slots
  const [availableTimeSlots, setAvailableTimeSlots] = useState<TimeSlot[]>([]);

  // Fetch time slots when date changes
  useEffect(() => {
    const fetchTimeSlots = async () => {
      try {
        const response = await fetch('/api/time-slots');
        const data = await response.json();
        
        // Filter time slots for the selected day of week
        const dayOfWeek = selectedDate.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
        const slotsForDay = data.timeSlots.filter(
          (slot: TimeSlot) => slot.dayOfWeek === dayOfWeek && slot.isAvailable
        );
        
        setAvailableTimeSlots(slotsForDay);
      } catch (error) {
        console.error('Error fetching time slots:', error);
      }
    };

    fetchTimeSlots();
  }, [selectedDate]);

  // Reset the form
  const resetForm = () => {
    setEmail("");
    setName("");
    setPhoneNumber("");
    setNotes("");
    setSelectedDate(new Date());
    setSelectedTimeSlot(null);
    setCurrentStep("email");
    setBookingComplete(false);
    setAppointmentDetails(null);
    setError(null);
    setIsLoading(false);
  };

  // Format date for display
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };

  // Validate email
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Handle email submission
  const handleEmailSubmit = () => {
    if (!email || !validateEmail(email)) {
      setValidEmail(false);
      return;
    }

    setValidEmail(true);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setCurrentStep("select-date");
    }, 500);
  };

  // Handle time slot selection
  const handleTimeSelection = (timeSlot: TimeSlot) => {
    setSelectedTimeSlot(timeSlot);
    setCurrentStep("confirm");
  };

  // Handle final booking submission
  const handleBookAppointment = async () => {
    setError(null);
    setIsLoading(true);

    if (!selectedTimeSlot) {
      setError("Please select a time slot.");
      setIsLoading(false);
      return;
    }

    try {
      const confirmationCode = Math.random()
        .toString(36)
        .substring(2, 10)
        .toUpperCase();

      const appointmentDetailsData = {
        clientName: name || "Anonymous",
        clientEmail: email,
        clientPhone: phoneNumber || "No phone provided",
        notes: notes || "No notes provided",
        date: format(selectedDate, "yyyy-MM-dd"),
        timeSlot: selectedTimeSlot._id,
        confirmationCode: confirmationCode,
      };

      // Save appointment to Sanity
      const appointmentResponse = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentDetailsData),
      });

      if (!appointmentResponse.ok) {
        throw new Error('Failed to save appointment');
      }

      // Send confirmation emails
      const emailResponse = await fetch('/api/send-appointment-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...appointmentDetailsData,
          time: `${selectedTimeSlot.startTime} - ${selectedTimeSlot.endTime}`,
          psychologist: psychologist.name,
        }),
      });

      if (!emailResponse.ok) {
        throw new Error('Failed to send confirmation emails');
      }

      setAppointmentDetails({
        ...appointmentDetailsData,
        time: `${selectedTimeSlot.startTime} - ${selectedTimeSlot.endTime}`,
        psychologist: psychologist.name,
      });
      setBookingComplete(true);
    } catch (err) {
      console.error("Error booking appointment:", err);
      setError("Sorry, there was a problem booking your appointment. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Check if date is in the past
  const isDateDisabled = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  // Handle dialog close
  const handleDialogClose = (open: boolean) => {
    if (!open && bookingComplete) {
      resetForm();
    }
    setIsOpen(open);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleDialogClose}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2 bg-teal-700 hover:bg-teal-700">
          <Calendar className="h-4 w-4" />
          Book Appointment
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md md:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            {bookingComplete
              ? "Appointment Confirmed!"
              : `Book an Appointment with ${psychologist.name}`}
          </DialogTitle>
        </DialogHeader>

        {error && (
          <Alert variant="destructive" className="mt-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {!bookingComplete ? (
          <div className="mt-4">
            {currentStep === "email" && (
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setValidEmail(true);
                    }}
                    placeholder="your@email.com"
                    className={!validEmail ? "border-red-500" : ""}
                  />
                  {!validEmail && (
                    <p className="text-sm text-red-500">
                      Please enter a valid email address.
                    </p>
                  )}
                </div>

                <Button
                  onClick={handleEmailSubmit}
                  disabled={isLoading}
                  className="w-full"
                >
                  {isLoading ? "Processing..." : "Continue"}
                </Button>
              </div>
            )}

            {currentStep === "select-date" && (
              <div className="space-y-4">
                <div className="grid gap-2">
                  <p className="text-sm text-gray-500">
                    Choose a date for your appointment:
                  </p>

                  <CalendarComponent
                    mode="single"
                    selected={selectedDate}
                    onSelect={(newDate) =>
                      newDate && setSelectedDate(newDate)
                    }
                    disabled={isDateDisabled}
                    className="rounded-md border mx-auto"
                  />
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep("email")}
                    disabled={isLoading}
                  >
                    Back
                  </Button>
                  <Button
                    onClick={() => setCurrentStep("select-time")}
                    disabled={isLoading}
                    className="flex-1"
                  >
                    {isLoading ? "Loading..." : "See Available Times"}
                  </Button>
                </div>
              </div>
            )}

            {currentStep === "select-time" && (
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{formatDate(selectedDate)}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setCurrentStep("select-date")}
                      disabled={isLoading}
                    >
                      Change Date
                    </Button>
                  </div>

                  <p className="text-sm text-gray-500 mt-2">
                    Available time slots for a {psychologist.duration} minute session:
                  </p>

                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {availableTimeSlots.length > 0 ? (
                      availableTimeSlots.map((timeSlot) => (
                        <Button
                          key={timeSlot._id}
                          variant="outline"
                          className="justify-start"
                          onClick={() => handleTimeSelection(timeSlot)}
                        >
                          <Clock className="mr-2 h-4 w-4" />
                          {timeSlot.startTime} - {timeSlot.endTime}
                        </Button>
                      ))
                    ) : (
                      <p className="text-sm text-gray-500 col-span-2">
                        No available time slots for this day.
                      </p>
                    )}
                  </div>
                </div>

                <Button
                  variant="outline"
                  onClick={() => setCurrentStep("select-date")}
                  disabled={isLoading}
                >
                  Back
                </Button>
              </div>
            )}

            {currentStep === "confirm" && selectedTimeSlot && (
              <div className="space-y-4">
                <div className="rounded-md bg-gray-50 p-4">
                  <div className="font-medium">Appointment Details:</div>
                  <div className="mt-2 text-sm text-gray-700">
                    <div>
                      <span className="font-medium">Date:</span>{" "}
                      {formatDate(selectedDate)}
                    </div>
                    <div>
                      <span className="font-medium">Time:</span>{" "}
                      {selectedTimeSlot.startTime} -{" "}
                      {selectedTimeSlot.endTime}
                    </div>
                    <div>
                      <span className="font-medium">Provider:</span>{" "}
                      {psychologist.name}
                    </div>
                    <div>
                      <span className="font-medium">Session:</span>{" "}
                      {psychologist.duration} minutes
                    </div>
                  </div>
                </div>

                <div className="grid gap-3">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone Number (optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="e.g., +15551234567"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="notes">Notes (optional)</Label>
                    <Input
                      id="notes"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Any information you'd like to share before the appointment"
                    />
                  </div>
                </div>

                <Alert>
                  <AlertDescription>
                    A confirmation email will be sent to {email} with your
                    appointment details.
                  </AlertDescription>
                </Alert>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep("select-time")}
                    disabled={isLoading}
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleBookAppointment}
                    disabled={isLoading || !name}
                    className="flex-1"
                  >
                    {isLoading ? "Processing..." : "Confirm Booking"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="mt-4 space-y-4">
            <div className="flex justify-center">
              <div className="rounded-full bg-green-100 p-3">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </div>

            <div className="text-center">
              <p className="font-medium text-lg">
                Your appointment has been scheduled!
              </p>
              <p className="text-gray-500">
                A confirmation email has been sent to {email}.
              </p>
            </div>

            <Card className="p-4 bg-gray-50">
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-1">
                  <div className="text-gray-500">Date:</div>
                  <div>{appointmentDetails?.date}</div>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <div className="text-gray-500">Time:</div>
                  <div>{appointmentDetails?.time}</div>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <div className="text-gray-500">Provider:</div>
                  <div>{appointmentDetails?.psychologist}</div>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <div className="text-gray-500">Confirmation Code:</div>
                  <div className="font-mono">
                    {appointmentDetails?.confirmationCode}
                  </div>
                </div>
              </div>
            </Card>

            <Alert className="bg-blue-50 border-blue-200">
              <Mail className="h-4 w-4 text-blue-600 mr-2" />
              <AlertDescription className="text-blue-600">
                Please check your email for appointment details.
              </AlertDescription>
            </Alert>

            <Button onClick={() => setIsOpen(false)} className="w-full">
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CalendarModal;