'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { WaitlistModal } from "@/components/WaitlistModal"

interface WaitlistTriggerProps {
    variant?: "default" | "outline"
    size?: "default" | "sm" | "lg"
    children: React.ReactNode
    className?: string
}

export function WaitlistTrigger({ variant = "default", size = "default", children, className }: WaitlistTriggerProps) {
    const [showWaitlist, setShowWaitlist] = useState(false)

    return (
        <>
            <Button
                variant={variant}
                size={size}
                className={className}
                onClick={() => setShowWaitlist(true)}
            >
                {children}
            </Button>
            <WaitlistModal
                isOpen={showWaitlist}
                onClose={() => setShowWaitlist(false)}
            />
        </>
    )
}

