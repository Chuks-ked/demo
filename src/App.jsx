import Footer from "./components/Footer"
import Header from "./components/Header"
import Card from "./components/Card"
import ProfileCard from "./components/ProfileCard"
import Counter from "./components/Counter"
import ToggleButton from "./components/ToggleButton"
import TodoList from "./components/TodoList"
import UserList from "./components/UserList"


const App = () => {

  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h2 className="text-xl font-semibold mb-4">Interactive App</h2>
        <p className="mt-2 text-gray-700">Explore state and events with React.</p>
      </main>
      <Counter />
      <ToggleButton />
      <TodoList />
      <UserList />

      <div className="flex flex-wrap justify-center">
        <Card title="Card 1" description="This is the first card" isFeatured={true} />
        <Card title="Card 2" description="This is the second card" isFeatured={false}/>
        <Card title="Card 3" description="This is the third card" isFeatured={true}/>
      </div>

      <div className="flex flex-wrap justify-center gap-4 p-6">
        <ProfileCard name="Chuks" bio="A passionate developer learning React." avatarUrl={"https://i.pravatar.cc/100?img=3"} />
        <ProfileCard name="Ada" bio="Designer and coder exploring new tech." avatarUrl={"https://i.pravatar.cc/100?img=4"} />
      </div>
      <Footer />
    </>
  )
}

export default App