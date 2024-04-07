import axios from "axios";

export async function fetch_watchlist()
{
  const response = await axios.get(
    `https://www.moomoo.com/quote-api/quote-v2/get-watch-list?page=0&page_size=20&t=1709887809417`,
    {
      headers: {
        "Cookie": "csrfToken=PqWT6bd3pQ6lTrHech0twO0I; locale=en-us; ftreport-jssdk%40new_user=1; cipher_device_id=1709885163683905; device_id=1709885163683905; sajssdk_2015_cross_new_user=1; _gid=GA1.2.1997126394.1709885165; passport_custom_data=%7B%22auth_type%22%3A%22google_one_tap%22%7D; _clck=so044t%7C2%7Cfjw%7C0%7C1528; showWatch=1; uid=73879175; passport_dp_data=ZrBJu%2FSlkPMtQgfzxc0QF%2Fx2QztD%2B1ZSQmGcYFMcli4ip3XZ5kEfjU%2FxCnjZGfUv%2B6g8gTaKR%2Be1WhzoQmVncDX%2FGa%2FD2yJpXao8W2zwsqvaV%2BbaPxYZr5FPmljrofic1YTcPORpnrWd3VW403CF1g%3D%3D; web_sig=KVcs6TVIz4pi63aJzKol1QfUtoL10VtUrHA3kXbusS6dFlggulqG%2Fm9%2Bzw%2B5SX1RmeUknmFgDGhV0gF6KbUoGZzMVn1wsgTh9%2BDcKPKIKNtG3cvHAQmugVSObxdOtfmKgffgqGZEXIA8Hf7UmOq%2FQw%3D%3D; us_cid=73879175; us_broker_web_sig=TOith6bZDtWV0gLS9wA9aYS9agwo2cyEmURpzuttNKG9RRfLmEWxLDW%2F1Jz0sgjGJio%2FpY1%2BThgmsLYHbk2slHauH8Mm80WsDHzf924DCIdnSplGzi6ShC5g3Q%2BE6ZpMLNubtzAFgBidTryJcn%2B4%2Fw%3D%3D; __ssid=b353e7a22aa6e710d74b3a67e4abaf9; futu-csrf=1pJnljgWXkfLD/6mo5s+7LytSUw=; _gcl_au=1.1.708251724.1709885164.1458276766.1709887053.1709887413; _ga_DXBNHXDWEN=GS1.1.1709887017.1.1.1709887424.0.0.0; _ga_ZHE4KJQ4SF=GS1.1.1709887017.1.1.1709887424.52.0.0; _rdt_uuid=1709887017266.33861737-5d26-43ee-a34b-3d91f77aacaf; _gat_UA-137699611-5=1; ftreport-jssdk%40session={%22distinctId%22:%22ftv17EsZDGwwujlRDZtU6ssY3QMBfxTWGehEZ8m6wbJQ+mUux0y13qKLEO5xgpCns1aa%22%2C%22firstId%22:%22ftv1AE174YjXKMyDwujv7iNihQGkL6Tx05ecCiu2S8eubvmOn1LIMdjTJmpOwh4Ce/gr%22%2C%22latestReferrer%22:%22https://www.moomoo.com/stock/WMT-US?global_content={%5C%22promote_id%5C%22%253A13764%2C%5C%22sub_promote_id%5C%22%253A2}%22}; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22ftv17EsZDGwwujlRDZtU6ssY3fJfKiefFI6xg6Bg12ruxY0ux0y13qKLEO5xgpCns1aa%22%2C%22first_id%22%3A%2218e1d1907b77b5-0a183afef24df58-19525634-4953600-18e1d1907b81175%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E8%87%AA%E7%84%B6%E6%90%9C%E7%B4%A2%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fwww.google.com%2F%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMThlMWQxOTA3Yjc3YjUtMGExODNhZmVmMjRkZjU4LTE5NTI1NjM0LTQ5NTM2MDAtMThlMWQxOTA3YjgxMTc1IiwiJGlkZW50aXR5X2xvZ2luX2lkIjoiZnR2MTdFc1pER3d3dWpsUkRadFU2c3NZM2ZKZktpZWZGSTZ4ZzZCZzEycnV4WTB1eDB5MTNxS0xFTzV4Z3BDbnMxYWEifQ%3D%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%22ftv17EsZDGwwujlRDZtU6ssY3fJfKiefFI6xg6Bg12ruxY0ux0y13qKLEO5xgpCns1aa%22%7D%2C%22%24device_id%22%3A%2218e1d1907b77b5-0a183afef24df58-19525634-4953600-18e1d1907b81175%22%7D; tgw_l7_route=c257e51d4d95b1143928f764870a9b03; locale.sig=h3YErZ4JgTARhxaZzlhOQKmRxI6h_M1xDKFO83E5j_c; _gat_UA-137699611-6=1; _ga_TCL6XGRYQP=GS1.1.1709885164.1.1.1709887807.56.0.0; _ga_Q2LPFH9N81=GS1.1.1709885164.1.1.1709887807.0.0.0; _ga_KER2R4QZ41=GS1.1.1709885164.1.1.1709887808.55.0.0; _ga_76MJLWJGT4=GS1.2.1709885165.1.1.1709887808.42.0.0; _ga_QMQR1WC63N=GS1.2.1709885165.1.1.1709887808.0.0.0; _clsk=1fncmaf%7C1709887808614%7C68%7C1%7Co.clarity.ms%2Fcollect; _ga=GA1.2.198593629.1709885164; _ga_25WYRC4KDG=GS1.1.1709885164.1.1.1709887809.0.0.0; _uetsid=b5cdb000dd2211eeb856112f4acc1cb0; _uetvid=b5cdc030dd2211eebdb221458b0feb17",
        "Futu-X-Csrf-Token": "PqWT6bd3pQ6lTrHech0twO0I",
        "Pragma": "no-cache",
        "Quote-Token": "88cbda11eb",
        "Referer": "buybak.xyz",
      },
    }
  );
    return response.data;
}
