import { useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

export default async function handleNextStep(elements){
    const addressElement = elements.getElement('address');
    const nav = useNavigate()  
    const {complete, value} = await addressElement.getValue();
  
    if (complete) {
      // Allow user to proceed to the next step
      // Optionally, use value to store the address details
      const address = event.value.address;
      nav("/")
    }
  };
