import React, { useState } from 'react';
import FrameComponent from "./frame-component";

const ParentComponent: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email submitted:', email);
  };

  return (
    <div>
      <FrameComponent
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default ParentComponent;
