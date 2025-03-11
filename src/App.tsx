import { useState } from 'react'
import { ErrorContext } from './contexts'
import TrainerForm from './components/TrainerForm/TrainerForm'

function App() {
  const [error, setError] = useState<unknown | null>(null)

  return (
    <div className="flex h-full flex-col">
      <ErrorContext.Provider value={setError}>
        {error ? (
          <div>Something went wrong. Please, restart the application.</div>
        ) : (
          <TrainerForm />
        )}
      </ErrorContext.Provider>
    </div>
  )
}

export default App
