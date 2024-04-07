import * as actionTypes from "./actions";
import * as I from "immutable";

export class Customer {

    constructor( name, cid, email, phone, type, address)
    {
        this.name = name;
        this.cid = cid;
        this.email = email;
        this.phone = phone;
        this.type = type;
        this.address = address;
    }
}

export class Retailer {

    constructor( store_name, store_id, store_number, city, province, zip, store_logo)
    {
        this.store_name = store_name;
        this.store_id = store_id;
        this.store_number = store_number;
        this.city = city;
        this.province = province;
        this.zip = zip;
        this.store_logo = store_logo;
    }
}

export class CustomerRetailFSOP {
    
    constructor( customer: Customer, retailer: Retailer, stock_price: Number, fsop: Number)
    {
        this.customer = customer;
        this.retailer = retailer;
        this.stock_price = stock_price;
        this.fsop = fsop;
    }
}

export class BuybakStatistics {
    
    constructor( store_id, total_value: Number, total_trans: Number)
    {
        this.store_id = store_id;
        this.total_value = total_value;
        this.total_trans = total_trans;
    }
}

/*
  {price: 28820400, quantity: 100, retailer: 'Chipotle Mexican Grill', stock: 'CMG'}
  {price: 7348000, quantity: 100, retailer: 'Costco', stock: 'COST'}
  {price: 3902800, quantity: 100, retailer: 'Home Depot', stock: 'HD'}
  {price: 907100, quantity: 100, retailer: 'Starbucks', stock: 'SBUX'}
  {price: 1686300, quantity: 100, retailer: 'Target', stock: 'TGT'}
  {price: 205800, quantity: 100, retailer: 'Walgreens Boots Alliance', stock: 'WBA'}
*/

const map_store_to_images = new I.Map({
    'AAPL':   '/images/AppleLogo.png',
    'AMZN':   '/images/AmazonLogo.png',
    'BP':   '/images/BPLogo.png',
    'CVS':   '/images/CVSLogo.png',
    'LLY':   '/images/LillyLogo.png',
    'NVDA':   '/images/NvidiaLogo.png',
    'SHEL':   '/images/ShellLogo.png',
    'TSLA':   '/images/TeslaLogo.png',
    'WMT':   '/images/WalmartLogo.png',
    'XOM':   '/images/ExxonLogo.png',
    'HD':   '/images/homedepot.png',
    'TGT':   '/images/target.png',
    'CMG':   '/images/chipotle.png',
    'SBUX':   '/images/starbucks.png',
    'ACE':   '/images/ace.png',
    'LOW':  '/images/lowes.png',
    'COST': '/images/costco.png',
    'WBA':   '/images/walgreens.png',
});

const initialState = {
  isOpen: false,
  isLoadingOpen: false,
  executionStatus: "Starting",
  alertCount: 0,
  is_login_open: true,
  login_username: undefined,
  total_fsop: new Number(1099.00),
  total_curr: new Number(1099.00),
  cdata: [0, 100, 175, 333, 500, 555, 689, 876, 989, 1000, 1103],
  map_store_to_quotes: new I.Map({
    'AAPL':   new CustomerRetailFSOP( 
                new Customer('', '', '', '', '', ''), 
                new Retailer('Apple', 'AAPL', '1', 'Naperville', 'IL', '60563', '/images/AppleLogo.png'), 1722800, 100), 
    'AMZN':   new CustomerRetailFSOP( 
                new Customer('', '', '', '', '', ''), 
                new Retailer('Amazon', 'AMZN', '1', 'Naperville', 'IL', '60563', '/images/AmazonLogo.png'), 1788700, 100), 
    'BP':   new CustomerRetailFSOP( 
                new Customer('', '', '', '', '', ''), 
                new Retailer('BP PLC', 'BP', '1', 'Naperville', 'IL', '60563', '/images/BPLogo.png'), 378000, 100), 
    'CVS':   new CustomerRetailFSOP( 
                new Customer('', '', '', '', '', ''), 
                new Retailer('CVS Health', 'CVS', '1', 'Naperville', 'IL', '60563', '/images/CVSLogo.png'), 784800, 100), 
    'LLY':   new CustomerRetailFSOP( 
                new Customer('', '', '', '', '', ''), 
                new Retailer('Eli Lilly and Co', 'LLY', '1', 'Naperville', 'IL', '60563', '/images/LillyLogo.png'), 7706100, 100), 
    'NVDA':   new CustomerRetailFSOP( 
                new Customer('', '', '', '', '', ''), 
                new Retailer('NVIDIA', 'NVDA', '1', 'Naperville', 'IL', '60563', '/images/NvidiaLogo.png'), 9428900, 100), 
    'SHEL':   new CustomerRetailFSOP( 
                new Customer('', '', '', '', '', ''), 
                new Retailer('Shell PLC', 'SHEL', '1', 'Naperville', 'IL', '60563', '/images/ShellLogo.png'), 669200, 100), 
    'TSLA':   new CustomerRetailFSOP( 
                new Customer('', '', '', '', '', ''), 
                new Retailer('Tesla', 'TSLA', '1', 'Naperville', 'IL', '60563', '/images/TeslaLogo.png'), 1708301, 100), 
    'WMT':   new CustomerRetailFSOP( 
                new Customer('', '', '', '', '', ''), 
                new Retailer('Walmart', 'WMT', '1', 'Naperville', 'IL', '60563', '/images/WalmartLogo.png'), 608700, 100), 
    'XOM':   new CustomerRetailFSOP( 
                new Customer('', '', '', '', '', ''), 
                new Retailer('Exxon Mobil', 'XOM', '1', 'Naperville', 'IL', '60563', '/images/ExxonLogo.png'), 1134900, 100), 
    'HD':   new CustomerRetailFSOP( 
                    new Customer('', '', '', '', '', ''), 
                    new Retailer('HomeDepot', 'HD', '171', 'Naperville', 'IL', '60563', "/images/homedepot.png"), 3631500, 1100),
    'TGT':   new CustomerRetailFSOP( 
                    new Customer('', '', '', '', '', ''), 
                    new Retailer('Target', 'TGT', '122', 'Naperville', 'IL', '60563', "/images/target.png"), 1463500, 2122),
    'CMG':   new CustomerRetailFSOP( 
                    new Customer('', '', '', '', '', ''), 
                    new Retailer('Chipotle', 'CMG', '183', 'Naperville', 'IL', '60563', "/images/chipotle.png"), 26382500, 1199),
    'SBUX':   new CustomerRetailFSOP( 
                    new Customer('', '', '', '', '', ''), 
                    new Retailer('Starbucks', 'SBUX', '115', 'Naperville', 'IL', '60563', "/images/starbucks.png"), 971500, 280),
    'ACE':   new CustomerRetailFSOP( 
                    new Customer('', '', '', '', '', ''), 
                    new Retailer('Ace Hard.', 'ACE', '116', 'Naperville', 'IL', '60563', "/images/ace.png"), 452500, 1235),
    'LOW':   new CustomerRetailFSOP( 
                    new Customer('', '', '', '', '', ''), 
                    new Retailer('Lowes', 'LOW', '117', 'Naperville', 'IL', '60563', "/images/lowes.png"), 2222600, 543),
    'COST':   new CustomerRetailFSOP( 
                    new Customer('', '', '', '', '', ''), 
                    new Retailer('Costco', 'COST', '118', 'Naperville', 'IL', '60563', "/images/costco.png"), 7234000, 980),
    'WBA':   new CustomerRetailFSOP( 
                    new Customer('', '', '', '', '', ''), 
                    new Retailer('Walgreens', 'WBA', '164', 'Naperville', 'IL', '60563', "/images/walgreens.png"), 222400, 2211),
  }),
  map_store_to_fsop: new I.Map({
    'HD':   new CustomerRetailFSOP( 
                    new Customer('Sameer', '0x1010', 'sameer@buybak.xyz', '630-696-7660', 'construction', 'Naperville, IL'), 
                    new Retailer('HomeDepot', 'HD', '171', 'Naperville', 'IL', '60563', "/images/homedepot.png"), 3631500, 285),
    }),
  map_store_to_stats: new I.Map({
    'XYZ':   new BuybakStatistics( "XYZ", 0, 0) 
  }),
  total_stats: Number(0),
  total_trans: Number(0),
};

const modalQRCodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MODAL_QRCODE_STATUS: {
        // TMD console.log( 'Inside SET_MODAL_QRCODE_STATUS');
        // console.log( {action});
      return {
        ...state,
        isOpen: action.isOpen,
        last_store_id: action.store_id
      };
    }
    case actionTypes.SET_MODAL_QRCODE_LOADING_STATUS: {
        console.log( 'Inside SET_MODAL_QRCODE_LOADING_STATUS');
        console.log( {action});
      return {
        ...state,
        isLoadingOpen: action.isLoadingOpen,
      };
    }
    case actionTypes.SET_MODAL_QRCODE_LOADING_EXEC_STATUS: {
        console.log( 'Inside SET_MODAL_QRCODE_LOADING_EXEC_STATUS');
        console.log( {action});
      return {
        ...state,
        executionStatus: action.executionStatus,
      };
    }
    case actionTypes.SET_MODAL_QRCODE_SCAN: {
        // TMD console.log( 'Inside SET_MODAL_QRCODE_SCAN');
        let login_username = state.login_username;
        let lmap = state.map_store_to_fsop;
        let fsop = lmap.get(action.store_id);
        if ( fsop === undefined)
        {
            console.log( 'SET_MODAL_QRCODE_SCAN: u: ' + login_username + ', store: ' + action.store_id + ', ' + action.stock_price);
            fsop = new CustomerRetailFSOP( 
                    new Customer(login_username, login_username, 'sameer@buybak.xyz', '630-696-7660', 'construction', 'Naperville, IL'), 
                    new Retailer(action.store_id, action.store_id, '171', 'Naperville', 'IL', '60563', map_store_to_images.get(action.store_id)), action.stock_price, 0);
        }
        fsop.stock_price = (fsop.fsop * fsop.stock_price + action.fsop * action.stock_price) / (fsop.fsop + action.fsop);
        fsop.fsop += action.fsop;
        lmap = lmap.set(action.store_id, fsop);
        console.log( 'SET_MODAL_QRCODE_SCAN: Setting Portfolio');
        console.log({fsop});

        let total = Number(0);
        lmap.forEach((item) => {
            total += Number((item.fsop * item.stock_price) / 1000000.00);
        });
        let count = state.alertCount;
        ++count;
        let tdata = state.cdata;
        tdata = tdata.concat(total);
        console.log( 'SCAN: ' + tdata);
      return {
        ...state,
        isLoadingOpen: false,
        last_store_id: action.store_id,
        map_store_to_fsop: lmap,
        total_fsop: total,
        alertCount: count,
        cdata: tdata,
      };
    }
    case actionTypes.SET_MODAL_QRCODE_SELL: {
        // TMD console.log( 'Inside SET_MODAL_QRCODE_SELL');
        let login_username = state.login_username;
        let lmap = state.map_store_to_fsop;
        let fsop = lmap.get(action.store_id);
        if ( fsop === undefined)
        {
            console.log( '!! Error !! SET_MODAL_QRCODE_SELL: u: ' + login_username + ', store: ' + action.store_id + ', ' + action.stock_price);
            return {
                ...state,
                isLoadingOpen: false,
            }
        }
        fsop.fsop -= action.fsop;
        lmap = lmap.set(action.store_id, fsop);
        console.log( 'SET_MODAL_QRCODE_SELL: Setting Portfolio');
        console.log({fsop});

        let total = Number(0);
        lmap.forEach((item) => {
            total += Number((item.fsop * item.stock_price) / 1000000.00);
        });
        let count = state.alertCount;
        ++count;
        let tdata = state.cdata;
        tdata = tdata.concat(total);
        console.log( 'SCAN: ' + tdata);
      return {
        ...state,
        isLoadingOpen: false,
        last_store_id: action.store_id,
        map_store_to_fsop: lmap,
        total_fsop: total,
        alertCount: count,
        cdata: tdata,
      };
    }
    case actionTypes.SET_STOCK_QUOTES: {
        // TMD console.log( 'Inside SET_STOCK_QUOTES');
        // TMD console.log( {action});
        let qmap = state.map_store_to_quotes;
        let qfsop = qmap.get(action.store_id);
        if ( qfsop !== undefined)
        {
            qfsop.stock_price = action.stock_price;
            qfsop.fsop = action.quantity;
            qmap = qmap.set(action.store_id, qfsop);
            // TMD console.log( 'SET_STOCK_QUOTES: set ' + action.stock_price + ' for ' + action.store_id);
        }
        let qtotal = Number(0);
        let lmap = state.map_store_to_fsop;
        lmap.forEach((item) => {
            let qfsop = qmap.get(item.retailer.store_id);
            // TMD console.log({item});
            if ( qfsop !== undefined)
            {
                qtotal += Number((item.fsop * qfsop.stock_price) / 1000000.00);
            }
        });
      return {
        ...state,
        map_store_to_quotes: qmap,
        total_curr: qtotal,
      };
    }
    case actionTypes.SET_BUYBAK_STATISTICS: {
        // TMD console.log( 'Inside SET_BUYBAK_STATISTICS');
        // TMD console.log( {action});
        let qmap = state.map_store_to_stats;
        let qstats = qmap.get(action.store_id);
        if ( qstats === undefined)
        {
            qstats = new BuybakStatistics(action.store_id, action.total_value, action.total_trans);
        }
        qstats.total_value = action.total_value;
        qstats.total_trans = action.total_trans;
        qmap = qmap.set(action.store_id, qstats);
        // TMD console.log( 'SET_BUYBAK_STATISTICS: set ' + action.total_value + ' for ' + action.store_id);

        let qtotal = Number(0);
        qmap.forEach((item) => {
            let qtemp = qmap.get(item.store_id);
            if ( qtemp !== undefined)
            {
                qtotal += qtemp.total_value;
            }
        });
        let ttotal = Number(0);
        qmap.forEach((item) => {
            let qtemp = qmap.get(item.store_id);
            if ( qtemp !== undefined)
            {
                // TMD console.log( item.store_id + ': ' + qtemp.total_trans);
                ttotal += qtemp.total_trans;
            }
        });
        // TMD console.log( 'SET_BUYBAK_STATISTICS: set TotalTx: ' + ttotal);
      return {
        ...state,
        map_store_to_stats: qmap,
        total_stats: qtotal,
        total_trans: ttotal,
      };
    }
    case actionTypes.SET_BUYBAK_RESET_ALERT_COUNT: {
      return {
        ...state,
        alertCount: 0
      };
    }
    case actionTypes.SET_MODAL_MOBILE_LOGIN_STATUS: {
        console.log( 'Inside SET_MODAL_MOBILE_LOGIN_STATUS');
        console.log( {action});
      return {
        ...state,
        is_login_open: action.isOpen,
      };
    }
    case actionTypes.SET_MODAL_MOBILE_LOGIN_NAME: {
        console.log( 'Inside SET_MODAL_MOBILE_LOGIN_NAME');
        console.log( {action});
      return {
        ...state,
        is_login_open: false,
        login_username: action.username
      };
    }
    default:
      return state;
  }
};

export default modalQRCodeReducer;

