import { useEffect, useMemo } from "react"
import Form from "./components/Form"
import ActivityList from "./components/ActivityList"
import CalorieTracker from "./components/CalorieTracker"
import { useActicity } from "./hooks/useActivity"

function App() {

  const { state, dispatch } = useActicity()
  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])

  const canRestart = useMemo(() => state.activities.length, [state.activities])

  return (
    <>
      <header className="bg-green-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center text-lg font-bold text-white uppercase">
            Contador de Calorias
          </h1>

          <button className="bg-blue-400 hover:bg-blue-600 text-white p-2 rounded disabled:opacity-30"
            disabled={!canRestart}
            onClick={() => dispatch({ type: "restart-app" })}
          >
            Reiniciar APP
          </button>

        </div>
      </header>

      <section className="bg-green-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form />
        </div>
      </section>

      <section className="bg-gray-800 py-10">
        <div className="max-w-4xl mx-auto">
          <CalorieTracker />
        </div>
      </section>

      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList
          activities={state.activities}
          dispatch={dispatch}
        />
      </section>
    </>
  )
}

export default App
