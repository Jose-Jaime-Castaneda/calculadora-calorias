import { Activity } from "../types"
import { categories } from "../data/categories"
import { useMemo } from "react"
import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline"
import { useActicity } from "../hooks/useActivity"

export default function ActivityList() {
    const { state, dispatch } = useActicity()
    const categoryName = useMemo(() => (category: Activity['category']) => categories.map(cat => cat.id === category ? cat.name : ''), [state.activities])
    const isEmpty = useMemo(() => state.activities.length === 0, [state.activities])

    return (
        <>
            <h2 className="text-4xl font-bold text-slate-600 text-center">Comia y Actividades</h2>

            {isEmpty ? <p className="text-center my-3">No hay datos para mostrar...</p> :
                state.activities.map(activity => (
                    <div key={activity.id} className="px-5 py-10 bg-white mt-5 flex justify-between">
                        <div className="space-y-2 relative">
                            <p className={`absolute -top-10 -left-5 p-2 text-white uppercase font-bold ${activity.category === 1 ? 'bg-green-400' : 'bg-orange-500'}`}>{categoryName(+activity.category)}</p>
                            <p className="text-2-xl font-bold pt-5">{activity.name}</p>
                            <p className="font-black text-4xl text-green-500">{activity.calories} {''}
                                <span>Calorias</span>
                            </p>
                        </div>

                        <div className="flex gap-5 items-center">
                            <button
                                onClick={() => dispatch({ type: 'set-activeID', payload: { id: activity.id } })}
                            >
                                <PencilSquareIcon
                                    className="h-8 w-8 text-gray-800"
                                />
                            </button>

                            <button
                                onClick={() => dispatch({ type: 'remove-activity', payload: { id: activity.id } })}
                            >
                                <XCircleIcon
                                    className="h-8 w-8 text-red-500"
                                />
                            </button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}