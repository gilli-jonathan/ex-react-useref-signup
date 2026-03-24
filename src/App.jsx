import { useState } from "react"

function App() {

  const [user, setUser] = useState(
    {
      name: '',
      username: '',
      password: '',
      specializzazione: '',
      esperienza: '',
      descrizione: ''
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
      !user.descrizione.trim()


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

        <label><p>password</p>
          <input type="text" name="password" value={user.password} onChange={handleUserData} />
        </label>

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

        <hr />
        <button type="submit">manda i dati</button>
      </form>

    </>
  )
}

export default App
