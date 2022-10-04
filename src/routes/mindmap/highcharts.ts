import Highcharts from 'highcharts';
import HighchartsNetworkgraph from 'highcharts/modules/networkgraph';
import HighchartsExporting from 'highcharts/modules/exporting';

export default (node: any, config: any) => {
	HighchartsNetworkgraph(Highcharts);
	HighchartsExporting(Highcharts);

	const redraw = true;
	const oneToOne = true;
	const chart = Highcharts.chart(node, config);

	return {
		update(config: any) {
			chart.update(config, redraw, oneToOne);
		},
		destroy() {
			chart.destroy();
		}
	};
};
