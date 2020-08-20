#  <h1 align="center">Trinity Place Shelter</h1>


# Overview
We have been given a design by the General Assembly UX Team including 5 different screens: <br/>
Home <br/> 
Volunteer <br/>
Volunteer Form <br/>
Donate <br/>
Donate Form <br/><br/>

The features include full CRUD capabilities for the Volunteer form which will be sent to our backend server and will become accessible in the "Volunteers info page" that we are adding.


# Team Expectations

[Team Expectations](https://docs.google.com/document/d/1uBlmLwluYCKS6EOEjmlVrDuaU-q9CRdK7HR8NNvWaO0/edit)

# Whimsical Flow Chart
[Flow Chart](https://whimsical.com/FbjkDr8PryLeny7kSUeYjz)

# Project Board

[Project Board ToDo](https://github.com/rbalonek/trinity-place-shelter/projects/1)

# MVP
## Screens <br/>
Home <br/>
Volunteer <br/>
Volunteer Now > Form <br/>
Donate > Form <br/>
Admin edit/delete <br/>
Error <br/> <br/>

## Components <br/>
Header/Nav <br/>
Footer <br/>
Banner <br/>
Form <br/>
CTA Button <br/>
Social <br/>
Donors <br/> <br/>

## Functionality/Services<br/>
CRUD Implementation <br/>

# Post MVP
Responsive Design <br/>
Phone Size integration <br/>
Animation (Video Play on Scroll) <br/>
Photo Carousel  <br/>
Connect "Donate" with Paypal <br/>

# Schema

```
const Volunteer = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    secondAddress: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true }
  },
  { timestamps: true }
)
```
