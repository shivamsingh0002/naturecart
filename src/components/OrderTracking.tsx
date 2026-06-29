"use client";

type Props = {
  status: string;
};

const steps = [
  "Pending",
  "Processing",
  "Shipped",
  "Delivered",
];

export default function OrderTracking({ status }: Props) {
  const currentIndex = steps.indexOf(status);

  return (
    <div className="flex items-center gap-4">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          
          <div
            className={`h-4 w-4 rounded-full ${
              index <= currentIndex
                ? "bg-green-600"
                : "bg-gray-300"
            }`}
          />

          <span className="ml-2 mr-4 text-sm">
            {step}
          </span>

          {index !== steps.length - 1 && (
            <div className="h-[2px] w-10 bg-gray-300" />
          )}
        </div>
      ))}
    </div>
  );
}