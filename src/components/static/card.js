const Card = ({ data }) => {
	return (
		<div className="card">
			<img className="cover" src={data.poster} />
			<div className="details">
				<div className="row">
					<h3 className="title">{data.title}</h3>
					<span className="rating">Rating: {data.rating}</span>
				</div>
				<span className="subtitle">{data.genre}</span>	
				<p className="description">{data.description}</p>
			</div>
		</div>
	)
}

export default Card