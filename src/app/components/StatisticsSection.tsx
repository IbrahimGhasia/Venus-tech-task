export default function StatisticsSection() {
	return (
		<div className="flex justify-center text-center gap-40 my-40">
			<div>
				<div className="gradient-text text-9xl font-extrabold">
					92<span className="text-4xl">%</span>
				</div>
				<div>
					<p className="text-lg font-normal">
						Average response <br /> accuracy
					</p>
				</div>
			</div>
			<div>
				<div className="gradient-text text-9xl font-extrabold">
					+88<span className="text-4xl">%</span>
				</div>
				<div>
					<p className="text-lg font-normal">Average productivity</p>
				</div>
			</div>
			<div>
				<div className="gradient-text text-9xl font-extrabold">3x</div>
				<div>
					<p className="text-lg font-normal">
						Reduce resolution times <br />
						for general questions
					</p>
				</div>
			</div>
		</div>
	);
}
