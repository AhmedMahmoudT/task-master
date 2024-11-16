/* eslint-disable react/prop-types */
const StepTitle = ({title}) => {
  return (
    <div className="font-bold w-full p-4">
        <div className={`border-2 ${title=='TODO'&&'text-amber-500 border-amber-500'} ${title=='IN PROGRESS'&&'text-cyan-500 border-cyan-500'} ${title=='DONE'&&'text-emerald-500 border-emerald-500'} py-1 px-2 rounded w-max`}>{title}</div>
    </div>
  )
}

export default StepTitle