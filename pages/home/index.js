import useSWR from 'swr'
import { fetcher } from '../../helpers/api'
import CardList from '../../components/CardList'

function Home() {
  const { data, error } = useSWR('/api/questions', fetcher)

  if (error) {
    console.dir(error)
    return 'error!'
  }

  if (!data) {
    return <div>...loading</div>
  }

  return (
    <>
      <CardList>
        {data?.map((question) => (
          <li key={question.id}>{question.question}</li>
        ))}
      </CardList>
    </>
  )
}
export default Home
