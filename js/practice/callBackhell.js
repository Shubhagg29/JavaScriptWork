const { createModuleResolutionCache } = require("typescript")

let order = (call_back) => {

    setTimeout(() => {
        console.log('order Placed')
        call_back();
    }, 2000);


}

let production = () => {
    console.log('production started')
    setTimeout(() => {
        console.log('fruits has been chopped ')
        setTimeout(() => {
            console.log('water and ice has been added')
            setTimeout(() => {
                console.log('Machine has been Started')
                setTimeout(() => {
                    console.log('Select either choclate or nut topping')
                    setTimeout(() => {
                        console.log('Serve the Ice- cream')
                    }, 1000);
                }, 2000);
            }, 1000)
        }, 1000);
    }, 2000);
}

order(production)