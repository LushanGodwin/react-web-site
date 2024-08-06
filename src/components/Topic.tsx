interface TopicProps {
    title: string
}
const Topic = (props:TopicProps) => {
    return (
        <div className='w-fit mb-2'>
            <h2 className='text-red-600 text-3xl font-bold mb-3'>{props.title }</h2>
            <div className='bg-red-600 w-3/4 h-0.5'></div>
        </div>
    )
}
export default Topic;