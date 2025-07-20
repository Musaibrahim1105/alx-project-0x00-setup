
import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>

      <Card />
<div className="flex flex-col items-center gap-4 p-8"></div>
         <div className="space-y-2">
        <h2 className="text-lg font-semibold">Sizes</h2>
        <Button title="Small Button" styles="text-sm px-2 py-1" />
        <Button title="Medium Button" styles="text-base px-4 py-2" />
        <Button title="Large Button" styles="text-lg px-6 py-3" />
      </div>

      {/* Shapes */}
      <div className="space-y-2 mt-6">
        <h2 className="text-lg font-semibold">Shapes</h2>
        <Button title="Rounded-sm" styles="rounded-sm" />
        <Button title="Rounded-md" styles="rounded-md" />
        <Button title="Rounded-full" styles="rounded-full" />
      </div>
      <div/>
    </div>
  )
}
export default Landing