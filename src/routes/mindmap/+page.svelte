<script>
	import highcharts from './highcharts';

	const SCALABILITY = 'Масштабируемость';
	const MICROSERVICE = 'Микросервисная архитектура';
	const CACHE = 'Кэш';
	const MONOLITH = 'Монолитная архитектура';
	const WEB_SERVER = 'Веб-сервер';
	const CDN = 'CDN';
	const DYNAMIC_CONTENT = 'Динамический контент';
	const STATIC_CONTENT = 'Статический контент';
	const CAP_THEOREM = 'CAP теорема';
	const DISTRIBUTED_SYSTEMS = 'Распределенные системы';
	const REPLICATION = 'Репликация';
	const HORIZONTAL_SCALING = 'Горизонтальное масштабирование';
	const VERTICAL_SCALING = 'Вертикальное масштабирование';
	const SERVERLESS_COMPUTING = 'Бессерверные вычисления';
	const DEVOPS = 'DevOps';
	const LOAD_BALANCING = 'Балансировка нагрузки';
	const CLUSTER = 'Кластер';
	const DISTRIBUTED_TRACING = 'Распределенная трассировка';
	const SYSTEM_ARCHITECTURE = 'Системная архитектура';
	const DATABASE = 'Базы данных';
	const DBMS = 'СУБД';
	const ATOMACITY = 'Атомарность';
	const CONSISTENCY = 'Согласованность';
	const ISOLATION = 'Изолированность';
	const DURABILITY = 'Надежность';
	const ACID = 'ACID требования';

	let data = [
		[SCALABILITY, MICROSERVICE],
		[ACID, DATABASE],
		[DATABASE, DBMS],
		[ACID, ATOMACITY],
		[ACID, CONSISTENCY],
		[ACID, ISOLATION],
		[ACID, DURABILITY],
		[ACID, SCALABILITY],
		[CAP_THEOREM, SCALABILITY],
		[CAP_THEOREM, DATABASE],
		[MICROSERVICE, MONOLITH],
		[STATIC_CONTENT, CDN],
		[WEB_SERVER, DYNAMIC_CONTENT],
		[SCALABILITY, WEB_SERVER],
		[SCALABILITY, CDN],
		[MICROSERVICE, WEB_SERVER],
		[MONOLITH, WEB_SERVER],
		[MICROSERVICE, VERTICAL_SCALING],
		[MICROSERVICE, HORIZONTAL_SCALING],
		[MONOLITH, VERTICAL_SCALING],
		[SCALABILITY, SYSTEM_ARCHITECTURE],
		[DISTRIBUTED_SYSTEMS, SCALABILITY],
		[DISTRIBUTED_SYSTEMS, SYSTEM_ARCHITECTURE],
		[SCALABILITY, SERVERLESS_COMPUTING],
		[SERVERLESS_COMPUTING, MICROSERVICE],
		[MICROSERVICE, CLUSTER],
		[CLUSTER, HORIZONTAL_SCALING],
		[DISTRIBUTED_TRACING, MICROSERVICE],
		[DISTRIBUTED_TRACING, DISTRIBUTED_SYSTEMS],
		[DEVOPS, SYSTEM_ARCHITECTURE],
		[DEVOPS, SCALABILITY],
		[REPLICATION, CLUSTER],
		[REPLICATION, DATABASE],
		[CLUSTER, DATABASE],
		[MICROSERVICE, LOAD_BALANCING],
		[CACHE, SYSTEM_ARCHITECTURE]
	];

	let config = {
		chart: {
			type: 'networkgraph',
			marginTop: 80
		},
		title: {
			text: 'Mindmap'
		},
		plotOptions: {
			networkgraph: {
				keys: ['from', 'to']
			}
		},
		series: [
			{
				marker: {
					radius: 30
				},
				dataLabels: {
					enabled: true,
					linkFormat: '',
					allowOverlap: true
				},
				data
			}
		],
		credits: {
			enabled: false
		}
	};
</script>

<div class="chart" use:highcharts={config} style="height: 1000px" />
