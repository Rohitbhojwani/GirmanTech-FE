import React from 'react'
import profile from '../assets/profile.png'
import phone from '../assets/phone.png'
import location from '../assets/location.png'
import profiledialog from '../assets/profiledialog.png'
import {
    Card,
    CardFooter,
    CardHeader,
  } from "@/components/ui/card"

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import '../styles/card.css'

  

const CardComponent = ({ firstName, lastName, city, Contact }) => {
  return (
    <>
        <Card>
            <CardHeader>
                <div className="card-heading">
                    <img src={profile} alt="profile" />
                    <span>{firstName}&nbsp;{lastName}</span>
                    <div className="card-location">
                        <img src={location} alt="location" />
                        <span>{city}</span>
                    </div>
                </div>
            </CardHeader>
            <CardFooter>
                <div className="card-footer">
                    <div className="left-footer">
                        <div className="left-footer-number">
                            <img src={phone} alt="phone" />
                            <span>{Contact}</span>
                        </div>
                        <div className="left-footer-text">
                            <span>Available on phone</span>
                        </div>
                    </div>
                    <div className="right-footer">
                    <Dialog>
                        <DialogTrigger asChild>
                            <button>Fetch Details</button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                            <div className="dialog-container">
                                <span>Fetch Details</span>
                                <span>Here are the details of following employee.</span><br />
                                <span>Name: {firstName}&nbsp;{lastName}</span>
                                <span>Location: {city}</span>
                                <span style={{marginBottom:"0.5rem"}}>Contact Number: {Contact}</span>
                                <span>Profile Image:</span>
                                <img src={profiledialog} alt="profileDialog" />
                            </div>
                            
                            
                            <DialogFooter className="sm:justify-end">
                                <DialogClose asChild>
                                    <Button type="button" variant="primary">
                                    Close
                                    </Button>
                                </DialogClose>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                    </div>
                </div>
            </CardFooter>
        </Card>

    </>
  )
}

export default CardComponent