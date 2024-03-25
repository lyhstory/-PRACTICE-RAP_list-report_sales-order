sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'salesorder/testlistreportsalesorder/test/integration/FirstJourney',
		'salesorder/testlistreportsalesorder/test/integration/pages/OrdersList',
		'salesorder/testlistreportsalesorder/test/integration/pages/OrdersObjectPage'
    ],
    function(JourneyRunner, opaJourney, OrdersList, OrdersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('salesorder/testlistreportsalesorder') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheOrdersList: OrdersList,
					onTheOrdersObjectPage: OrdersObjectPage
                }
            },
            opaJourney.run
        );
    }
);