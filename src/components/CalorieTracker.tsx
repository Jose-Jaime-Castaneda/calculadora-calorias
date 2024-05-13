import CalorieDisplay from "./CalorieDisplay"
import { useActicity } from "../hooks/useActivity"
import { useMemo } from "react";

export default function CalorieTracker() {
    const { state, caloriesConsumed, caloriesBurned } = useActicity();
    const netCalories = useMemo(() => caloriesConsumed - caloriesBurned, [state.activities])

    return (
        <>
            <h2 className="text-4xl font-bold text-white text-center">
                Resumen de calorias
            </h2>
            <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
                <CalorieDisplay
                    calories={caloriesConsumed}
                    text={"Consumidas"}
                />

                <CalorieDisplay
                    calories={caloriesBurned}
                    text="Quemadas"
                />

                <CalorieDisplay
                    calories={netCalories}
                    text="Diferencia"
                />
            </div>
        </>
    )
}