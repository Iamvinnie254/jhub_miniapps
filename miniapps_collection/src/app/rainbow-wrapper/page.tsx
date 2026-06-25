import RainbowWrapper from "@/features/miniapps/components/rainbowWrapper/RainbowWrapper";

export default function RainbowWrapperPage() {
  const items = ["One", "Two", "Three", "Four", "Five", "Six", "Seven"];

  return (
    <div className="flex flex-col gap-4 p-8">
      {items.map((item, index) => (
        <RainbowWrapper key={index} index={index}>
          <div className="p-4 text-white font-bold">{item}</div>
        </RainbowWrapper>
      ))}
    </div>
  );
}
