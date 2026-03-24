import { useMemo, useState } from "react"

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+<[]{}|;:'\",.>?/`~";

function App() {

  const [user, setUser] = useState(
    {
      name: 'budino',
      username: 'cioccolato',
      password: 'banana',
      specializzazione: 'full cream',
      esperienza: '8',
      descrizione: 'scimmia'
    }
  )

  function handleSubmit(e) {
    e.preventDefault()

    if (
      !user.name.trim() ||
      !user.username.trim() ||
      !user.password.trim() ||
      !user.specializzazione.trim() ||
      !user.esperienza.trim() ||
      user.esperienza <= 0 ||
      !user.descrizione.trim() ||
      !nomeValido ||
      !passwalida ||
      !descriValida

    ) {
      alert('comiplare tutto a modino, rifai Bro')
      return
    }

    console.log(user);

  }

  function handleUserData(e) {
    const { name, value } = e.target; // Destructuring per pulizia
    setUser({
      ...user,
      [name]: value
    });
  }

  const nomeValido = useMemo(() => {

    const caratteri = user.username.split('').every(car =>
      letters.includes(car.toLowerCase()) ||
      numbers.includes(car)
    )

    return caratteri && user.username.length >= 6
  })

  const passwalida = useMemo(() => {
    return (user.password.trim().length >= 8 &&
      user.password.split('').some(car => letters.includes(car)) &&
      user.password.split('').some(car => numbers.includes(car)) &&
      user.password.split('').some(car => symbols.includes(car))

    )
  })

  const descriValida = useMemo(() => {
    return user.descrizione.trim().length >= 100 &&
      user.descrizione.trim().length < 1000
  })

  return (
    <>
      <h1>hello world</h1>

      <form onSubmit={handleSubmit}>
        <label><p>metti il nome</p>
          <input type="text" name="name" value={user.name} onChange={handleUserData} />
        </label>

        <label><p>username</p>
          <input type="text" name="username" value={user.username} onChange={handleUserData} />
        </label>
        {user.username.trim() && (
          <p style={{ color: nomeValido ? 'green' : 'red' }}>
            {nomeValido ? 'username valido' : 'minimo 6 caratteri alfanumerici'}
          </p>)}

        <label><p>password</p>
          <input type="text" name="password" value={user.password} onChange={handleUserData} />
        </label>
        {user.password.trim() && (
          <p style={{ color: passwalida ? 'green' : 'red' }}>
            {passwalida ? 'tutto ok' : 'minimo 8 caratteri con i simbolini'}
          </p>)}

        <label><p>specializzazione</p>
          <select type="text" name="specializzazione" value={user.specializzazione} onChange={handleUserData}>
            <option value="">scegli</option>
            <option value="Full Stack">Full Stack</option>
            <option value="Front End">Front End</option>
            <option value="back End">Back End</option>
          </select>
        </label>

        <label><p>esperienza</p>
          <input type="number" name="esperienza" value={user.esperienza} onChange={handleUserData} />
        </label>

        <label><p>descrizione</p>
          <textarea name="descrizione" value={user.descrizione} onChange={handleUserData} />
        </label>
        {user.password.trim() && (
          <p style={{ color: descriValida ? 'green' : 'red' }}>
            {descriValida ? 'tutto ok' : 'più caratteri ma max 1000'}
          </p>)}

        <hr />
        <button type="submit">manda i dati</button>
      </form>

    </>
  )
}

export default App
