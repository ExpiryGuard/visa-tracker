import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CheckCircle, X, Users, Building, Mail, Phone, MessageSquare } from "lucide-react"

interface WaitlistModalProps {
    isOpen: boolean
    onClose: () => void
}

interface FormData {
    companyName: string
    contactPerson: string
    email: string
    phone: string
    employeeCount: string
    painPoints: string
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
    const [step, setStep] = useState<'form' | 'success'>('form')
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState<FormData>({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        employeeCount: '',
        painPoints: ''
    })

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    const handleSubmit = async () => {
        if (!formData.companyName || !formData.contactPerson || !formData.email || !formData.employeeCount) {
            alert('Please fill in all required fields')
            return
        }
        setLoading(true)

        try {
            const response = await fetch('https://formspree.io/f/xgvloqwa', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                setStep('success')
            } else {
                throw new Error('Submission failed')
            }
        } catch (error) {
            alert('Something went wrong. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    const resetModal = () => {
        setStep('form')
        setFormData({
            companyName: '',
            contactPerson: '',
            email: '',
            phone: '',
            employeeCount: '',
            painPoints: ''
        })
        onClose()
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-md">
                {step === 'form' ? (
                    <>
                        <DialogHeader>
                            <div className="flex items-center justify-between">
                                <div>
                                    <DialogTitle className="text-xl font-bold">Join the Waitlist</DialogTitle>
                                    <DialogDescription className="mt-2">
                                        ExpiryGuard MVP launches October 2025. Be first in line for early access.
                                    </DialogDescription>
                                </div>
                                <Badge className="bg-orange-100 text-orange-800 ml-4">
                                    Coming Soon
                                </Badge>
                            </div>
                        </DialogHeader>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="company" className="flex items-center">
                                    <Building className="w-4 h-4 mr-2" />
                                    Company Name *
                                </Label>
                                <Input
                                    id="company"
                                    value={formData.companyName}
                                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                                    placeholder="Your company name"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="contact" className="flex items-center">
                                    <Users className="w-4 h-4 mr-2" />
                                    Contact Person *
                                </Label>
                                <Input
                                    id="contact"
                                    value={formData.contactPerson}
                                    onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                                    placeholder="Your full name"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="flex items-center">
                                        <Mail className="w-4 h-4 mr-2" />
                                        Email *
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                        placeholder="you@company.com"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="flex items-center">
                                        <Phone className="w-4 h-4 mr-2" />
                                        WhatsApp
                                    </Label>
                                    <Input
                                        id="phone"
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                        placeholder="+971 50 123 4567"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="employees" className="flex items-center">
                                    <Users className="w-4 h-4 mr-2" />
                                    Number of Employees *
                                </Label>
                                <Select
                                    value={formData.employeeCount}
                                    onValueChange={(value) => handleInputChange('employeeCount', value)}
                                    required
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select employee count" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1-20">1-20 employees</SelectItem>
                                        <SelectItem value="21-50">21-50 employees</SelectItem>
                                        <SelectItem value="51-100">51-100 employees</SelectItem>
                                        <SelectItem value="101-500">101-500 employees</SelectItem>
                                        <SelectItem value="500+">500+ employees</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="painpoints" className="flex items-center">
                                    <MessageSquare className="w-4 h-4 mr-2" />
                                    Current Pain Points (Optional)
                                </Label>
                                <Textarea
                                    id="painpoints"
                                    value={formData.painPoints}
                                    onChange={(e) => handleInputChange('painPoints', e.target.value)}
                                    placeholder="What visa management challenges does your company face?"
                                    rows={3}
                                />
                            </div>

                            <div className="flex gap-3 pt-4">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={onClose}
                                    className="flex-1"
                                >
                                    Maybe Later
                                </Button>
                                <Button
                                    type="button"
                                    onClick={handleSubmit}
                                    disabled={loading}
                                    className="flex-1"
                                >
                                    {loading ? 'Joining...' : 'Join Waitlist'}
                                </Button>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <DialogHeader>
                            <div className="text-center">
                                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8 text-green-600" />
                                </div>
                                <DialogTitle className="text-xl font-bold text-green-800">
                                    Welcome to the Waitlist!
                                </DialogTitle>
                                <DialogDescription className="mt-2 text-gray-600">
                                    Thank you for your interest in ExpiryGuard. We&apos;ll notify you as soon as we launch.
                                </DialogDescription>
                            </div>
                        </DialogHeader>

                        <div className="space-y-4">
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="space-y-3 text-sm">
                                        <div className="flex items-center text-gray-600">
                                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                            You&apos;ll get early access when we launch
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                            Weekly updates on UAE visa compliance
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                            Special launch pricing for waitlist members
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="bg-blue-50 rounded-lg p-4 text-center">
                                <p className="text-sm text-blue-800 mb-2">
                                    <strong>Follow our blog for updates:</strong>
                                </p>
                                <p className="text-sm text-blue-600">
                                    We&apos;ll be posting weekly about UAE visa changes and compliance tips at{' '}
                                    <a href="/blog" className="underline font-medium">
                                        expiryguard.ae/blog
                                    </a>
                                </p>
                            </div>

                            <Button onClick={resetModal} className="w-full">
                                Done
                            </Button>
                        </div>
                    </>
                )}
            </DialogContent>
        </Dialog>
    )
}