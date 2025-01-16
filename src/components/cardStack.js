import React, { useState, useEffect, Children } from "react";
import styled from "@emotion/styled";
import { Card } from "./tinderCard";

// Basic default styles for the container
const Frame = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Stack = ({ onVote, children, removeRotate, ...props }) => {
  const initialStack = Children.toArray(children); // Store the initial stack
  const [stack, setStack] = useState(initialStack);
  const [isResetting, setIsResetting] = useState(false); // To handle smooth refill

  const pop = (array) => {
    return array.filter((_, index) => index < array.length - 1);
  };

  const handleVote = (item, vote) => {
    let newStack = pop(stack);

    if (newStack.length === 0) {
      // Trigger smooth reset
      setIsResetting(true);
      setTimeout(() => {
        setStack([...initialStack]);
        setIsResetting(false);
      }, 300); // Adjust timeout to match animation duration
    } else {
      setStack(newStack);
    }

    // Notify parent about the vote
    onVote(item, vote);
  };

  useEffect(() => {
    // Ensure the stack refills properly if children change dynamically
    if (children) {
      setStack(Children.toArray(children));
    }
  }, [children]);

  return (
    <>
      <Frame {...props}>
        {!isResetting &&
          stack.map((item, index) => {
            const isTop = index === stack.length - 1;
            return (
              <Card
                drag={isTop} // Only top card is draggable
                removeRotate={removeRotate}
                key={item.key || index}
                onVote={(result) => handleVote(item, result)}
              >
                {item}
              </Card>
            );
          })}
      </Frame>
    </>
  );
};
