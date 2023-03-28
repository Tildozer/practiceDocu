import React from 'react';
import {AddressElement} from '@stripe/react-stripe-js';
import {default as handleNextStep} from "./checkout"

const AddressForm = () => {
  return (
    <form>
      <h3>Shipping</h3>
      <AddressElement 
        options={{mode: 'shipping'}} onChange={ev => handleNextStep(elements)} />
            {/* //         (event) => {
                //       if (event.complete) {
                    // // Extract potentially complete address
                    //       const address = event.value.address; */}
    </form>
  );
};

export default AddressForm;
