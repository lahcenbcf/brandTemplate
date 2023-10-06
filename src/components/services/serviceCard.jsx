
function ServiceCard({Icon,title="",desc=""}) {
  return (
    <div className='card'>
        <div className='icon'>
                <Icon />
                <h3>{title}</h3>
        </div>
        <p>{desc}</p>
    </div>
  )
}

export default ServiceCard