
function ServiceCard({Icon,title="",desc=""}) {
  return (
    <div className='card'>
        <div className='icon'>
                <Icon size={30} color="23d998" />
                <h3>{title}</h3>
        </div>
        <p>{desc}</p>
    </div>
  )
}

export default ServiceCard