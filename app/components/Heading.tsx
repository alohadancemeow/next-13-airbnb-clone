"use client";

type Props = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

const Heading = ({ title, center, subtitle }: Props) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-xl font-bold">{title}</div>
      <div className="mt-2 font-light text-neutral-500">{subtitle}</div>
    </div>
  );
};

export default Heading;
