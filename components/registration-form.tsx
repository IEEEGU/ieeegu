"use client"

import { useState, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PlusCircle, Trash2, Info, Users, Calendar, BadgeIndianRupee, CheckCircle2 } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useToast } from "@/components/ui/use-toast"
import { motion } from "framer-motion"

// Event data definition
const eventData = [
  {
    id: "codeastra",
    name: "CODEASTRA",
    pricePerPerson: 100,
    minTeamSize: 2,
    maxTeamSize: 4,
    isFixedPrice: false,
  },
  {
    id: "imagix",
    name: "IMAGIX",
    pricePerPerson: 0,
    fixedPrice: 150,
    minTeamSize: 1,
    maxTeamSize: 3,
    isFixedPrice: true,
  },
  {
    id: "techTriviaBlitz",
    name: "TECH TRIVIA BLITZ",
    pricePerPerson: 70,
    minTeamSize: 1,
    maxTeamSize: 1,
    isFixedPrice: false,
  },
  {
    id: "decodeTheCode",
    name: "DECODE THE CODE",
    pricePerPerson: 60,
    minTeamSize: 1,
    maxTeamSize: 1,
    isFixedPrice: false,
  },
  {
    id: "followTheLine",
    name: "FOLLOW THE LINE",
    pricePerPerson: 100,
    minTeamSize: 1,
    maxTeamSize: 4,
    isFixedPrice: false,
  },
  {
    id: "designCanvas",
    name: "DESIGN CANVAS",
    pricePerPerson: 50,
    minTeamSize: 2,
    maxTeamSize: 4,
    isFixedPrice: false,
  },
  {
    id: "photoWalk",
    name: "PHOTOWALK",
    pricePerPerson: 50,
    minTeamSize: 1,
    maxTeamSize: 1,
    isFixedPrice: false,
  },
  {
    id: "codeBlind",
    name: "CODEBLINDS",
    pricePerPerson: 60,
    minTeamSize: 1,
    maxTeamSize: 1,
    isFixedPrice: false,
  },
  {
    id: "pitchMe",
    name: "PITCH ME 3.0 TECH REVIVAL EDITION",
    pricePerPerson: 0,
    fixedPrice: 150,
    minTeamSize: 1,
    maxTeamSize: 2,
    isFixedPrice: true,
  },
]


const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  affiliation: z.string().min(2, { message: "Affiliation must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  mobile: z.string().min(10, { message: "Mobile number must be at least 10 digits." }),
  selectedEvent: z.string().min(1, { message: "Please select an event." }),
  teamMembers: z.array(
    z.object({
      name: z.string().min(2, { message: "Team member name must be at least 2 characters." })
    })
  )
})

export default function RegistrationForm() {
  const [selectedEvent, setSelectedEvent] = useState<string>("")
  const [eventDetails, setEventDetails] = useState<any>(null)
  const [teamSize, setTeamSize] = useState(1)
  const [totalAmount, setTotalAmount] = useState(0)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      affiliation: "",
      mobile: "",
      selectedEvent: "",
      teamMembers: []
    }
  })

  // Watch team members for reactive updates
  const watchedTeamMembers = form.watch("teamMembers")

  // Update event details when a new event is selected
  useEffect(() => {
    if (selectedEvent) {
      const event = eventData.find(e => e.id === selectedEvent)
      setEventDetails(event)
      resetTeamMembers(event)
    } else {
      setEventDetails(null)
    }
  }, [selectedEvent])

  // Watch for changes to the selected event
  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === "selectedEvent" && value.selectedEvent) {
        setSelectedEvent(value.selectedEvent as string)
      }
    })
    return () => subscription.unsubscribe()
  }, [form.watch])

  // Update team size and total amount when team members change
  useEffect(() => {
    if (eventDetails) {
      const currentTeamSize = 1 + watchedTeamMembers.length
      setTeamSize(currentTeamSize)
      
      if (eventDetails.isFixedPrice) {
        setTotalAmount(eventDetails.fixedPrice)
      } else {
        setTotalAmount(eventDetails.pricePerPerson * currentTeamSize)
      }
    }
  }, [watchedTeamMembers, eventDetails])

  function resetTeamMembers(event: any) {
    if (event.minTeamSize > 1) {
      // Initialize with minimum required team members
      const initialTeamMembers = Array(event.minTeamSize - 1).fill(0).map(() => ({name: ""}))
      form.setValue("teamMembers", initialTeamMembers)
    } else {
      form.setValue("teamMembers", [])
    }
  }

  function addTeamMember() {
    if (eventDetails && watchedTeamMembers.length < eventDetails.maxTeamSize - 1) {
      form.setValue("teamMembers", [...watchedTeamMembers, {name: ""}], { 
        shouldValidate: false,
        shouldDirty: true,
        shouldTouch: true
      })
    }
  }

  function removeTeamMember(index: number) {
    form.setValue(
      "teamMembers", 
      watchedTeamMembers.filter((_, i) => i !== index),
      { 
        shouldValidate: false,
        shouldDirty: true, 
        shouldTouch: true
      }
    )
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: "Registration Successful",
      description: "Your registration has been submitted successfully.",
      duration: 5000,
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="border-slate-100 shadow-sm bg-white">
            <CardHeader className="border-b border-slate-100 bg-slate-50/50">
              <CardTitle className="text-2xl text-slate-800">Personal Information</CardTitle>
              <CardDescription className="text-slate-500">Enter your contact details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your full name" 
                          {...field} 
                          className="border-slate-200 dark:text-slate-300 focus:border-slate-400 focus:ring-slate-300" 
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="affiliation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700">Affiliation/College</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your college name" 
                          {...field} 
                          className="border-slate-200 dark:text-slate-300 focus:border-slate-400 focus:ring-slate-300"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your email address" 
                          type="email" 
                          {...field} 
                          className="border-slate-200 dark:text-slate-300 focus:border-slate-400 focus:ring-slate-300"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700">Mobile</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your mobile number" 
                          type="tel" 
                          {...field} 
                          className="border-slate-200 dark:text-slate-300 focus:border-slate-400 focus:ring-slate-300"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Card className="border-slate-100 shadow-sm bg-white">
            <CardHeader className="border-b border-slate-100 bg-slate-50/50">
              <CardTitle className="text-2xl text-slate-800">Event Selection</CardTitle>
              <CardDescription className="text-slate-500">Choose which event you want to participate in</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <FormField
                control={form.control}
                name="selectedEvent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-700">Select Event</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-slate-200 focus:border-slate-400 focus:ring-slate-300 bg-white text-slate-800">
                          <SelectValue placeholder="Select an event" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-white  dark:text-slate-900 border-slate-200">
                        {eventData.map((event) => (
                          <SelectItem key={event.id} value={event.id} className="focus:bg-slate-100 dark:text-slate-900 focus:text-slate-900">
                            {event.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              {eventDetails && (
                <div className="mt-6 p-5 bg-slate-50 rounded-lg space-y-3 border border-slate-100">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Calendar className="h-4 w-4 text-slate-500" />
                    <span className="text-sm font-medium">{eventDetails.name}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Users className="h-4 w-4 text-slate-500" />
                    <span className="text-sm">Team Size: {eventDetails.minTeamSize} - {eventDetails.maxTeamSize} members</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <BadgeIndianRupee className="h-4 w-4 text-slate-500" />
                    <span className="text-sm">
                      {eventDetails.isFixedPrice 
                        ? `Fixed Price: ₹${eventDetails.fixedPrice}`
                        : `Price per person: ₹${eventDetails.pricePerPerson}`}
                    </span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {selectedEvent && eventDetails && eventDetails.maxTeamSize > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Card className="border-slate-100 shadow-sm bg-white">
              <CardHeader className="border-b border-slate-100 bg-slate-50/50 flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-2xl text-slate-800">Team Members</CardTitle>
                  <CardDescription className="text-slate-500">
                    Add {eventDetails.minTeamSize > 1 ? "required" : "additional"} team members
                  </CardDescription>
                </div>
                {teamSize < eventDetails.maxTeamSize && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={addTeamMember} 
                          className="border-slate-200 bg-white text-slate-800 hover:bg-slate-50 flex items-center gap-2"
                        >
                          <PlusCircle className="h-4 w-4" />
                          Add Member
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-slate-800 text-white">
                        Add team member
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                {watchedTeamMembers.length === 0 ? (
                  <div className="text-center p-8 text-slate-500 border border-dashed border-slate-200 rounded-lg">
                    {eventDetails.minTeamSize === 1 
                      ? "You can participate individually or add team members" 
                      : "Please add required team members"}
                  </div>
                ) : (
                  watchedTeamMembers.map((_, index) => (
                    <div key={index} className="flex items-end gap-3 group p-3 rounded-md hover:bg-slate-50 transition-colors">
                      <FormField
                        control={form.control}
                        name={`teamMembers.${index}.name`}
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormLabel className="text-slate-700 flex items-center">
                              Team Member {index + 2} Name
                              {index < eventDetails.minTeamSize - 1 && (
                                <Badge variant="outline" className="ml-2 text-xs border-amber-200 bg-amber-50 text-amber-700">Required</Badge>
                              )}
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder={`Enter team member ${index + 2} name`} 
                                {...field} 
                                className="border-slate-200 dark:text-slate-900 focus:border-slate-400 focus:ring-slate-300"
                              />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      />
                      {teamSize > eventDetails.minTeamSize && (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => removeTeamMember(index)}
                                className="mb-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50 hover:text-red-600"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent className="bg-slate-800 text-white">
                              Remove member
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                    </div>
                  ))
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Card className="border-slate-100 shadow-sm bg-white">
            <CardHeader className="border-b border-slate-100 bg-slate-50/50">
              <CardTitle className="text-2xl text-slate-800">Registration Summary</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {selectedEvent ? (
                  <>
                    <div className="flex justify-between items-center text-slate-700">
                      <span>Selected Event</span>
                      <span className="font-medium">{eventDetails?.name}</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-700">
                      <span>Team Size</span>
                      <span className="font-medium">{teamSize} member{teamSize !== 1 ? 's' : ''}</span>
                    </div>
                    <Separator className="my-4 bg-slate-100" />
                    <div className="flex justify-between items-center text-lg">
                      <span className="font-semibold text-slate-800">Total Amount</span>
                      <span className="font-bold text-slate-900 bg-slate-50 py-1 px-3 rounded-md">₹{totalAmount}</span>
                    </div>
                    
                    <div className="rounded-md bg-blue-50 border border-blue-100 p-4 mt-4">
                      <div className="flex items-start gap-2">
                        <Info className="h-4 w-4 mt-1 flex-shrink-0 text-blue-500" />
                        <p className="text-sm text-blue-700">
                          Payment can be made at the registration desk on the event day.
                          Please keep this total amount ready.
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center p-8 text-slate-500 border border-dashed border-slate-200 rounded-lg">
                    Select an event to see the registration summary
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          className="flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Button 
            type="submit" 
            size="lg" 
            disabled={!selectedEvent}
            className="px-8 py-6 bg-slate-800 hover:bg-slate-700 text-white transition-colors"
          >
            <CheckCircle2 className="mr-2 h-5 w-5" />
            Complete Registration
          </Button>
        </motion.div>
      </form>
    </Form>
  )
}
