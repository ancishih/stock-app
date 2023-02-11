import { ReactElement } from "react";
import Image from "next/image";
import Calendar from "@/components/Calendar";
import Layout from "@/components/Layout";
import Link from "next/link";
import dayjs from "@/utils/dayjs";
const data = [
  {
    symbol: "AMZN",
    publishedDate: "2023-02-11 02:16:49",
    title: "Amazon: Turnaround Underway",
    image: "https://cdn.snapi.dev/images/v1/k/r/image-1252468735-1749905.jpg",
    site: "Seeking Alpha",
    text: "Amazon reported solid numbers for the fourth quarter, beating consensus estimates in most metrics. However, bears claim that AWS slowdown is devastating as well as the company lacks of showing sustainable profits.",
    url: "https://seekingalpha.com/article/4577490-amazon-turnaround-underway",
  },
  {
    symbol: "KBAL",
    publishedDate: "2023-02-11 01:55:01",
    title: "Kimball International Is Still A Decent Prospect At This Time",
    image: "https://cdn.snapi.dev/images/v1/3/i/image-1380472832-1749904.jpg",
    site: "Seeking Alpha",
    text: "Kimball International recently posted strong sales and cash flow figures, with strong demand helping the company across the board. Cash flows are rising nicely because of the higher sales and due to growing profit margins.",
    url: "https://seekingalpha.com/article/4577488-kimball-international-decent-prospect-time",
  },
  {
    symbol: "MRPRF",
    publishedDate: "2023-02-11 01:23:53",
    title: "Merlin Properties: Still See Upside Potential Here",
    image: "https://cdn.snapi.dev/images/v1/x/5/image-1402139820-1749901.jpg",
    site: "Seeking Alpha",
    text: "I wrote about Merlin Properties some time ago, calling the company one of the largest REITs in all of Europe. The company's shares are found in Spain. The company has an appealing blend of real estate investments coupled with an attractive development/investment pipeline.",
    url: "https://seekingalpha.com/article/4577485-merlin-properties-upside-potential",
  },
  {
    symbol: "DLR",
    publishedDate: "2023-02-11 01:03:55",
    title:
      "Digital Realty Trust: Downside Risk Remains As Competition Threatens Cash Flow",
    image: "https://cdn.snapi.dev/images/v1/w/h/image-1401292297-1749900.jpg",
    site: "Seeking Alpha",
    text: 'Digital Realty Trust has lost considerable value over the past year as interest rates rise and investors reassess the competitive "moat" of data center REITs. I believe Digital Realty faces growing competition due to its lack of a "locational moat" and its customers\' efforts to build their own data center assets.',
    url: "https://seekingalpha.com/article/4577482-digital-realty-trust-downside-risk-remains-as-competition-threatens-cash-flow",
  },
  {
    symbol: "RC",
    publishedDate: "2023-02-11 00:55:47",
    title: "Ready Capital: The 12.4% Yield Is Still Exciting",
    image: "https://cdn.snapi.dev/images/v1/w/y/image-1351573088-1749898.jpg",
    site: "Seeking Alpha",
    text: "Ready Capital just cut its quarterly dividend payout to its common shareholders by nearly 5% on the back of interest rate financing pressure. However, the cut was lower than some expected as the mortgage REIT continues to navigate a rising interest rate environment.",
    url: "https://seekingalpha.com/article/4577481-ready-capital-yield-still-exciting",
  },
  {
    symbol: "FLCH",
    publishedDate: "2023-02-11 00:55:45",
    title: "FLCH: An Ultra-Low-Cost Vehicle To Play The China Recovery",
    image: "https://cdn.snapi.dev/images/v1/0/2/image-1386416320-1749899.jpg",
    site: "Seeking Alpha",
    text: "The Franklin FTSE China ETF offers one of the lowest expense ratios within the Chinese ETF universe. While the portfolio is relatively well-diversified, there is an outsized exposure to the Chinese consumer, making the fund ideal for investors looking to play the consumption-led recovery theme.",
    url: "https://seekingalpha.com/article/4577480-flch-etf-an-ultra-low-cost-vehicle-to-play-china-recovery",
  },
  {
    symbol: "PTEN",
    publishedDate: "2023-02-11 00:48:31",
    title: "Patterson-UTI Energy's Services Are In Good Demand",
    image: "https://cdn.snapi.dev/images/v1/v/j/image-1223443438-1749897.jpg",
    site: "Seeking Alpha",
    text: "Oilfield services company Patterson-UTI supplies pressure pumping and contract drilling services. The company's market capitalization is $3.1 billion, and it pays a 2.2% dividend.",
    url: "https://seekingalpha.com/article/4577479-patterson-uti-energys-services-are-in-good-demand",
  },
  {
    symbol: "AMZN",
    publishedDate: "2023-02-11 00:42:37",
    title: "Amazon: Buy When Others Are Fearful",
    image: "https://cdn.snapi.dev/images/v1/n/g/image-1399736201-1749896.jpg",
    site: "Seeking Alpha",
    text: "Despite market turbulence, savvy AMZN investors who bought more at its January lows still outperformed the S&P 500. Amazon's success in H2'23 hinges on AWS returning to growth mode - attracting long-term buyers back.",
    url: "https://seekingalpha.com/article/4577477-amazon-buy-when-others-are-fearful",
  },
  {
    symbol: "EQNR",
    publishedDate: "2023-02-11 00:36:16",
    title:
      "Equinor: Dividends Rising At The Norwegian Energy Major After 75% Price Gains",
    image: "https://cdn.snapi.dev/images/v1/t/o/image-1442790542-1749895.jpg",
    site: "Seeking Alpha",
    text: "I previously offered Equinor ASA as an alternative to U.S. energy. Equinor rose 75% over the three-year period but has stalled.",
    url: "https://seekingalpha.com/article/4577476-equinor-dividends-rising-norwegian-energy-major-after-price-gains",
  },
  {
    symbol: "ENLAY",
    publishedDate: "2023-02-11 00:33:11",
    title: "Enel: We Double Down",
    image: "https://cdn.snapi.dev/images/v1/s/t/image-1418826068-1749894.jpg",
    site: "Seeking Alpha",
    text: "Enel's top-line sales were up by 64%. The company is managing energy price increases for its end clients. Core EBITDA was beyond guidance and signed a plus 2.6%. Debt was down by €10 billion on a quarterly basis. New disinvestment in Brazil.",
    url: "https://seekingalpha.com/article/4577475-enel-we-double-down",
  },
  {
    symbol: "SCHD",
    publishedDate: "2023-02-11 00:05:59",
    title:
      "Analyzing My Market-Beating DGI Portfolio: I Must Be Doing Something REIT",
    image: "https://cdn.snapi.dev/images/v1/t/a/image-1384411573-1749891.jpg",
    site: "Seeking Alpha",
    text: "I perform a deep dive analysis of my dividend growth income portfolio for which I currently provide monthly income updates. In the past 12 months, this portfolio has beaten the S&P 500 by a noticeable margin.",
    url: "https://seekingalpha.com/article/4577472-analyzing-my-market-beating-dgi-portfolio-doing-something-reit",
  },
  {
    symbol: "RXO",
    publishedDate: "2023-02-11 00:00:07",
    title:
      "RXO CEO talks earnings, tech-enabled logistics, and using AI for freight carriers",
    image:
      "https://cdn.snapi.dev/images/v1/4/o/rxo-ceo-talks-earnings-tech-enabled-logistics-and-using-ai-for-freight-carriers-1749893.jpg",
    site: "Yahoo Finance",
    text: "This segment originally aired on February 8, 2023. RXO CEO Drew Wilkerson joins Yahoo Finance Live anchors Brad Smith, Julie Hyman, and Brian Sozzi to discuss company earnings, going public following the XPO spinoff, a slowdown in the macro economy, industry tailwinds, and the outlook for 2023.",
    url: "https://www.youtube.com/watch?v=NbSN1yPt_dI",
  },
  {
    symbol: "FLKR",
    publishedDate: "2023-02-10 23:59:42",
    title: "Franklin FTSE South Korea ETF: Flicker Of Hope",
    image: "https://cdn.snapi.dev/images/v1/9/4/image-1071683882-1749890.jpg",
    site: "Seeking Alpha",
    text: "The Franklin FTSE South Korea ETF is a smaller, less commonly covered ETF that tracks the performance of mid/large cap stocks in South Korea. South Korea is currently my top pick out of the top five largest MSCI Emerging Market countries, which include China, Taiwan, South Korea, India, and Brazil.",
    url: "https://seekingalpha.com/article/4577471-franklin-ftse-south-korea-etf-flkr-flicker-of-hope",
  },
  {
    symbol: "BME",
    publishedDate: "2023-02-10 23:47:50",
    title: "BME: Solid High Yielding Healthcare CEF",
    image: "https://cdn.snapi.dev/images/v1/d/m/image-1367871743-1749889.jpg",
    site: "Seeking Alpha",
    text: "BME is a large-cap focused health care CEF. It pays a generous 5.9% distribution yield.",
    url: "https://seekingalpha.com/article/4577470-bme-solid-high-yielding-health-care-cef",
  },
  {
    symbol: "KROS",
    publishedDate: "2023-02-10 23:36:49",
    title: "Keros Therapeutics: Market Rewarding KER-050 Trial Momentum",
    image: "https://cdn.snapi.dev/images/v1/e/k/image-637727246-1749886.jpg",
    site: "Seeking Alpha",
    text: "Data is promising for KROS' KER-050 compound; investors are rewarding the company on its novel hypotheses. We performed a deep dive on its most recent readouts on KER-050.",
    url: "https://seekingalpha.com/article/4577465-keros-therapeutics-market-rewarding-ker-050-trial-momentum",
  },
  {
    symbol: "BCI",
    publishedDate: "2023-02-10 23:04:33",
    title: "BCI: The Smartest Way To Invest In The Commodity Bull Market",
    image: "https://cdn.snapi.dev/images/v1/e/w/image-1385299427-1749883.jpg",
    site: "Seeking Alpha",
    text: 'Diversified Portfolio: The BCI ETF offers exposure to a variety of commodities, including energy, precious metals, agriculture, and livestock. K-1 Free Structure: The ETF has a "K-1 Free" structure, which eliminates the tax implications of investing in futures contracts and provides income and dividends through a regular Form 1099.',
    url: "https://seekingalpha.com/article/4577463-bci-smartest-invest-commodity-bull-market",
  },
  {
    symbol: "ACB",
    publishedDate: "2023-02-10 22:46:17",
    title:
      "Aurora Cannabis Reaches Adjusted EBITDA Profitability Target in the Second Quarter",
    image:
      "https://cdn.snapi.dev/images/v1/e/h/urlhttps3a2f2fgfoolcdncom2feditorial2fimages2f5156212fmarijuana-leaf-on-green-background-1749876.jpg",
    site: "24/7 Wall Street",
    text: "Global marijuana industry leader Aurora Cannabis (CA:ACB) reported second quarter results on Thursday after the closure of US equity markets.",
    url: "https://247wallst.com/investing/2023/02/10/aurora-cannabis-reaches-adjusted-ebitda-profitability-target-in-the-second-quarter/",
  },
  {
    symbol: "SUMCF",
    publishedDate: "2023-02-10 22:46:02",
    title: "Sumco Corporation (SUMCF) Q4 2022 Earnings Call Transcript",
    image: "https://cdn.snapi.dev/images/v1/l/s/transcript4-1749874.jpg",
    site: "Seeking Alpha",
    text: "Sumco Corporation (OTCPK:SUMCF) Q4 2022 Earnings Conference Call February 9, 2023 1:00 AM ET Company Participants Hiroshi Shibaya - Managing Executive Officer Mayuki Hashimoto - Chairman and Chief Executive Officer Michiharu Takii - Vice President and Chief Financial Officer Hiroshi Itoh - General Manager, Accounting Conference Call Participants Takashi Enomoto - BofA Securities Atsushi Ikeda - Goldman Sachs Takato Watabe - Morgan Stanley MUFG Securities Go Miyamoto - SMBC Nikko Shigeki Okazaki - Nomura Securities Shuuichi Nakahara - Tokai Tokyo Securities Yuta Nishiyama - Citi Group Securities Yu Yoshida - CLSA Securities Ryoichi Watanabe - Mitsubishi UFJ Securities Mikiya Yamada - Mizuho Securities Hiroshi Shibaya I am Hiroshi Shibaya of Sumco Corporation. Thank you for your participation today.",
    url: "https://seekingalpha.com/article/4577469-sumco-corporation-sumcf-q4-2022-earnings-call-transcript",
  },
  {
    symbol: "BRK-B",
    publishedDate: "2023-02-10 22:41:00",
    title: "State Street Cuts Stake in Berkshire Hathaway",
    image: "https://cdn.snapi.dev/images/v1/a/m/asset-management4-1749877.jpg",
    site: "24/7 Wall Street",
    text: "Fintel reports that State Street has filed a 13G/A form with the SEC disclosing ownership of 72.00MM shares of Berkshire Hathaway, Inc.",
    url: "https://247wallst.com/investing/2023/02/10/state-street-cuts-stake-in-berkshire-hathaway-brk-b/",
  },
  {
    symbol: "DISH",
    publishedDate: "2023-02-10 22:39:17",
    title: "Invesco Increases Position in DISH Network",
    image: "https://cdn.snapi.dev/images/v1/l/i/catv3-1749878.jpg",
    site: "24/7 Wall Street",
    text: "Fintel reports that Invesco has filed a 13G form with the SEC disclosing ownership of 15.41MM shares of DISH Network Corp (DISH).",
    url: "https://247wallst.com/investing/2023/02/10/invesco-increases-position-in-dish-network-dish/",
  },
  {
    symbol: "KOS",
    publishedDate: "2023-02-10 22:35:15",
    title:
      "Benchmark Initiates Coverage of Kosmos Energy With Buy Recommendation",
    image: "https://cdn.snapi.dev/images/v1/p/0/oil31-1749879.jpg",
    site: "24/7 Wall Street",
    text: "On February 9, 2023, Benchmark initiated coverage of Kosmos Energy with a Buy recommendation.",
    url: "https://247wallst.com/investing/2023/02/10/benchmark-initiates-coverage-of-kosmos-energy-kos-with-buy-recommendation/",
  },
  {
    symbol: "DKNG",
    publishedDate: "2023-02-10 22:34:29",
    title: "Roth Capital Downgrades DraftKings",
    image: "https://cdn.snapi.dev/images/v1/i/g/draft1a-1749880.jpg",
    site: "24/7 Wall Street",
    text: "On February 9, 2023, Roth Capital downgraded their outlook for Draftkings from Neutral to Sell.",
    url: "https://247wallst.com/investing/2023/02/10/roth-capital-downgrades-draftkings-dkng/",
  },
  {
    symbol: "SPWR",
    publishedDate: "2023-02-10 22:33:22",
    title:
      "Janney Montgomery Scott Initiates Coverage of SunPower With Neutral Recommendation",
    image:
      "https://cdn.snapi.dev/images/v1/n/z/image-1399237941-1584611-1749881.jpg",
    site: "24/7 Wall Street",
    text: "On February 9, 2023, Janney Montgomery Scott initiated coverage of SunPower with a Neutral recommendation.",
    url: "https://247wallst.com/investing/2023/02/10/janney-montgomery-scott-initiates-coverage-of-sunpower-spwr-with-neutral-recommendation/",
  },
  {
    symbol: "MHK",
    publishedDate: "2023-02-10 22:32:08",
    title: "Mohawk Industries, Inc. (MHK) Q4 2022 Earnings Call Transcript",
    image: "https://cdn.snapi.dev/images/v1/r/h/transcript3-1749873.jpg",
    site: "Seeking Alpha",
    text: "Mohawk Industries, Inc. (NYSE:MHK ) Q4 2022 Earnings Conference Call February 10, 2023 4:00 AM ET Company Participants James Brunk - Chief Financial Officer Jeff Lorberbaum - Chairman & Chief Executive Officer Christopher Wellborn - President & Chief Operating Officer. Conference Call Participants Phil Ng - Jefferies Susan Maklari - Goldman Sachs Eric Bosshard - Cleveland Research Company Truman Patterson - Wolfe Research Mike Dahl - RBC Capital Markets Stephen Kim - Evercore ISI Keith Hughes - Truist Security John Lovallo - UBS Rafe Jadrosich - Bank of America Adam Baumgarten - Zelman Laura Champine - Loop Capital Brian Biros - Thompson Research Group Matthew Bouley - Barclays David MacGregor - Longbow Research Operator Good day, and welcome to the Mohawk Industries Inc. Fourth Quarter 2022 Earnings Call.",
    url: "https://seekingalpha.com/article/4577464-mohawk-industries-inc-mhk-q4-2022-earnings-call-transcript",
  },
  {
    symbol: "PACB",
    publishedDate: "2023-02-10 22:31:22",
    title:
      "Jackson Square Partners Cuts Stake in Pacific Biosciences of California",
    image: "https://cdn.snapi.dev/images/v1/z/o/biotech13-1749882.jpg",
    site: "24/7 Wall Street",
    text: "Fintel reports that Jackson Square Partners has filed a 13G/A form with the SEC disclosing ownership of 15.01MM shares of Pacific Biosciences of California Inc (PACB).",
    url: "https://247wallst.com/investing/2023/02/10/jackson-square-partners-cuts-stake-in-pacific-biosciences-of-california-pacb/",
  },
  {
    symbol: "TRIP",
    publishedDate: "2023-02-10 21:50:05",
    title: "Are These Stocks Bargains Before Earnings?",
    image: "https://cdn.snapi.dev/images/v1/9/7/bank1-1327900-1749869.jpg",
    site: "Zacks Investment Research",
    text: "Next week's earnings lineup features quite a few stocks that appear to trade at discounts considering their affordable price tags and fundamental metrics.",
    url: "https://www.zacks.com/stock/news/2053091/are-these-stocks-bargains-before-earnings",
  },
  {
    symbol: "SFTBY",
    publishedDate: "2023-02-10 21:22:15",
    title:
      "Exclusive: SoftBank's Arm China lays off workers as outlook grim -sources",
    image:
      "https://cdn.snapi.dev/images/v1/g/3/the-groups-stakes-in-g-1370110-1749868.jpg",
    site: "Reuters",
    text: "SoftBank Group Corp's chip technology firm Arm Ltd's China joint venture laid off 90-95 employees last week to cope with a challenging business outlook this year, according to three sources familiar with the situation.",
    url: "https://www.reuters.com/world/china/softbanks-arm-china-lays-off-workers-outlook-grim-sources-2023-02-11/",
  },
  {
    symbol: "CVX",
    publishedDate: "2023-02-10 21:09:56",
    title: "Chevron agrees to sell Myanmar assets and will exit country",
    image:
      "https://cdn.snapi.dev/images/v1/r/z/zxodct3l3bn63m5iapjaz3jnxi-1749892.jpg",
    site: "Reuters",
    text: "U.S. oil major Chevron Corp on Friday said it had agreed to sell its assets in Myanmar to Canadian company MTI, in a deal that allows it to leave the Asian country.",
    url: "https://www.reuters.com/business/energy/chevron-agrees-sell-myanmar-assets-will-exit-country-2023-02-11/",
  },
  {
    symbol: "OFC",
    publishedDate: "2023-02-10 20:49:06",
    title:
      "Corporate Office Properties Trust (OFC) Q4 2022 Earnings Call Transcript",
    image: "https://cdn.snapi.dev/images/v1/k/p/transcript2-1749865.jpg",
    site: "Seeking Alpha",
    text: "Corporate Office Properties Trust (NYSE:OFC ) Q4 2022 Earnings Conference Call February 10, 2023 12:00 PM ET Company Participants Venkat Kommineni - Vice President, Investor Relations Steve Budorick - President and Chief Executive Officer Todd Hartman - Executive Vice President and Chief Operating Officer Anthony Mifsud - Executive Vice President and Chief Financial Officer Conference Call Participants Jason Belcher - Wells Fargo Michael Griffin - Citi Camille Bonnel - Bank of America Anthony Paolone - JPMorgan Tom Catherwood - BTIG Steve Sakwa - Evercore ISI Dave Rodgers - R.W. Baird Operator Welcome to the Corporate Office Properties Trust Fourth Quarter and Full-Year 2022 Results Conference Call.",
    url: "https://seekingalpha.com/article/4577459-corporate-office-properties-trust-ofc-q4-2022-earnings-call-transcript",
  },
  {
    symbol: "LRLCY",
    publishedDate: "2023-02-10 20:39:03",
    title: "L'Oréal S.A. (LRLCF) Q4 2022 Earnings Call Transcript",
    image: "https://cdn.snapi.dev/images/v1/6/a/transcript1-1749859.jpg",
    site: "Seeking Alpha",
    text: "L'Oréal S.A. (OTCPK:LRLCF) Q4 2022 Earnings Conference Call February 10, 2023 3:00 AM ET Company Participants Nicolas Hieronimus - CEO Christophe Babule - CFO Alexis Perakis-Valat - President, Consumer Product Division Cyril Chapuy - President, L'Oréal Luxe Myriam Cohen-Welgryn - President, Active Cosmetics Omar Hajeri - President, Professional Products Division Conference Call Participants Celine Pannuti - JPMorgan Jeremy Fialko - HSBC Tom Sykes - Deutsche Bank Bruno Monteyne - Bernstein Guillaume Delmas - UBS Emma Letheren - RBC Karel Zoete - Kepler Cheuvreux Chris Pitcher - Redburn Ian Simpson - Barclays Rogerio Fujimori - Stifel Nicolas Hieronimus Good morning, everyone.",
    url: "https://seekingalpha.com/article/4577458-loreal-s-lrlcf-q4-2022-earnings-call-transcript",
  },
  {
    symbol: "SEDG",
    publishedDate: "2023-02-10 20:19:10",
    title: 'Time to Buy These "Unique" Top-Rated Stocks as Earnings Approach',
    image:
      "https://cdn.snapi.dev/images/v1/x/k/urlhttps3a2f2fgfoolcdncom2feditorial2fimages2f7085832fa-person-looking-at-server-hardware-while-holding-a-laptop-computerjpgopresizew400h400-1633635-1749855.jpg",
    site: "Zacks Investment Research",
    text: "Here is a look at these two 'unique' companies that investors may want to consider buying with their quarterly reports approaching.",
    url: "https://www.zacks.com/commentary/2053087/time-to-buy-these-unique-top-rated-stocks-as-earnings-approach",
  },
  {
    symbol: "DXCM",
    publishedDate: "2023-02-10 19:51:00",
    title: "Dexcom CEO on working with insurance companies",
    image:
      "https://cdn.snapi.dev/images/v1/q/g/dexcom-ceo-on-working-with-insurance-companies-1749853.jpg",
    site: "CNBC Television",
    text: "Cramer spoke with Dexcom CEO Kevin Sayer on Friday.",
    url: "https://www.youtube.com/watch?v=OlcpGaK7xnU",
  },
  {
    symbol: "VICI",
    publishedDate: "2023-02-10 19:38:25",
    title: "VICI Offers Long-Term Sustainable Growth",
    image: "https://cdn.snapi.dev/images/v1/n/a/image-954500850-1749846.jpg",
    site: "Seeking Alpha",
    text: "Historical annual growth rates have been 10.9%, 9.1%, and 8.3% for 2020, 2021, and 2022, and should continue to grow with FFO. FFO/share could grow by 5% to ~$1.87/share from $1.77/share with their recent acquisitions.",
    url: "https://seekingalpha.com/article/4577447-vici-offers-long-term-sustainable-growth",
  },
  {
    symbol: "TSM",
    publishedDate: "2023-02-10 19:34:13",
    title:
      "How to Buy Stocks Like Warren Buffett's Right-Hand Man Charlie Munger",
    image:
      "https://cdn.snapi.dev/images/v1/6/n/computer-electronic2-1749845.jpg",
    site: "Zacks Investment Research",
    text: "Forget what you know about buying fair businesses at wonderful prices; instead, buy wonderful businesses at fair prices",
    url: "https://www.zacks.com/stock/news/2053072/how-to-buy-stocks-like-warren-buffett-s-right-hand-man-charlie-munger",
  },
  {
    symbol: "NEWR",
    publishedDate: "2023-02-10 19:34:00",
    title: "Jim Cramer gives a recap on New Relic's latest quarterly earnings",
    image:
      "https://cdn.snapi.dev/images/v1/k/k/jim-cramer-gives-a-recap-on-new-relics-latest-quarterly-earnings-1749848.jpg",
    site: "CNBC Television",
    text: "Cramer explained what to make of New Relic's latest quarterly earnings report.",
    url: "https://www.youtube.com/watch?v=m09Kbj3ikVY",
  },
  {
    symbol: "MPAA",
    publishedDate: "2023-02-10 19:32:04",
    title:
      "Motorcar Parts of America, Inc. (MPAA) Q3 2023 Earnings Call Transcript",
    image: "https://cdn.snapi.dev/images/v1/q/m/transcript50-1749844.jpg",
    site: "Seeking Alpha",
    text: "Motorcar Parts of America, Inc. (NASDAQ:MPAA ) Q3 2023 Earnings Conference Call February 9, 2023 1:00 PM ET Company Participants Gary Maier - Vice President of Corporate Communications and Investor Relations Selwyn Joffe - Chairman, President and Chief Executive Officer David Lee - Chief Financial Officer Conference Call Participants Matthew Koranda - ROTH Capital Partners Brian Nagel - Oppenheimer & Co. William Dezellem - Tieton Capital Management, LLC Operator Good day. My name is Rob, and I will be your conference operator today.",
    url: "https://seekingalpha.com/article/4577453-motorcar-parts-of-america-inc-mpaa-q3-2023-earnings-call-transcript",
  },
  {
    symbol: "AIRC",
    publishedDate: "2023-02-10 19:30:04",
    title:
      "Apartment Income REIT Corp. (AIRC) Q4 2022 Earnings Call Transcript",
    image: "https://cdn.snapi.dev/images/v1/f/w/transcript49-1749843.jpg",
    site: "Seeking Alpha",
    text: "Apartment Income REIT Corp. (NYSE:AIRC ) Q4 2022 Earnings Conference Call February 10, 2023 1:00 PM ET Company Participants Lisa Cohn - President and General Counsel, AIR Communities Terry Considine - CEO Keith Kimmel - President of Property Operations John McGrath - Co-CIO and Chairman of Investment Committee Paul Beldin - CFO Conference Call Participants Haendel St. Juste - Mizuho John Kim - BMO Capital Markets Nick Joseph - Citi Chandni Luthra - Goldman Sachs Rich Anderson - SMBC John Pawlowski - Green Street Operator Welcome, and thank you for attending today's AIR Communities Fourth Quarter and Full Year 2022 Earnings Conference Call. My name is Alexis, and will be your moderator for today's call.",
    url: "https://seekingalpha.com/article/4577452-apartment-income-reit-corp-airc-q4-2022-earnings-call-transcript",
  },
  {
    symbol: "BAP",
    publishedDate: "2023-02-10 19:25:26",
    title: "Credicorp Ltd (BAP) Q4 2022 Earnings Call Transcript",
    image: "https://cdn.snapi.dev/images/v1/y/o/transcript48-1749841.jpg",
    site: "Seeking Alpha",
    text: "Credicorp Ltd (NYSE:BAP ) Q4 2022 Earnings Conference Call February 10, 2023 9:30 AM ET Company Participants Milagros Cigüeñas - Head of IR Gianfranco Ferrari - CEO Cesar Rivera - CFO Reynaldo Llosa - Chief Risk Officer Conference Call Participants Daer Labarta - Goldman Sachs Geoffrey Elliott - Autonomous Yuri Fernandes - JPMorgan Juan Recalde - Scotiabank Andres Soto - Santander Tejkiran Kannaluri Magesh - White Oak Capital Carlos Gomez - HSBC Operator Good morning, everyone. I would like to welcome you all to the Credicorp Limited Fourth Quarter 2022 Conference Call.",
    url: "https://seekingalpha.com/article/4577451-credicorp-ltd-bap-q4-2022-earnings-call-transcript",
  },
  {
    symbol: "GOOGL",
    publishedDate: "2023-02-10 19:06:07",
    title: "Google cautions against 'hallucinating' chatbots - report",
    image:
      "https://cdn.snapi.dev/images/v1/o/q/az3c2mc6tfisfplh23ldwy2b74-1749838.jpg",
    site: "Reuters",
    text: "The boss of Google's search engine warned against the pitfalls of artificial intelligence in chatbots in a newspaper interview published on Saturday, as Google parent company Alphabet battles to compete with blockbuster app ChatGPT.",
    url: "https://www.reuters.com/technology/google-cautions-against-hallucinating-chatbots-report-2023-02-11/",
  },
  {
    symbol: "RXO",
    publishedDate: "2023-02-10 19:06:02",
    title: "RXO, Inc. (RXO) Q4 2022 Earnings Call Transcript",
    image: "https://cdn.snapi.dev/images/v1/d/t/transcript47-1749835.jpg",
    site: "Seeking Alpha",
    text: "RXO, Inc. (NYSE:RXO ) Q4 2022 Earnings Conference Call February 8, 2023 8:00 AM ET Company Participants Drew Wilkerson - Chief Executive Officer Jamie Harris - Chief Financial Officer Jared Weisfeld - Chief Strategy Officer Conference Call Participants Stephanie Moore - Jefferies LLC Ken Hoexter - Bank of America Merrill Lynch Scott Group - Wolfe Research Scott Schneeberger - Oppenheimer & Co. Thomas Wadewitz - UBS Allison Poliniak - Wells Fargo Securities LLC Brian Ossenbeck - JPMorgan Chase & Co Jack Atkins - Stephens Inc. Jordan Alliger - Goldman Sachs Group, Inc. Bascome Majors - Susquehanna Financial Group Operator Welcome to the RXO Q4 2022 Earnings Conference Call and Webcast. My name is Michelle, and I will be the operator for today's call.",
    url: "https://seekingalpha.com/article/4577450-rxo-inc-rxo-q4-2022-earnings-call-transcript",
  },
  {
    symbol: "WHF",
    publishedDate: "2023-02-10 19:04:09",
    title: "BDC Weekly Review: The Two Steps Of BDC Analysis",
    image: "https://cdn.snapi.dev/images/v1/w/j/image-1348229414-1749837.jpg",
    site: "Seeking Alpha",
    text: "We take a look at the action in business development companies through the first week of February and highlight some of the key themes we are watching. BDCs notched another good week with a 1% total return.",
    url: "https://seekingalpha.com/article/4577444-bdc-weekly-review-the-two-steps-of-bdc-analysis",
  },
  {
    symbol: "OCPNF",
    publishedDate: "2023-02-10 18:59:04",
    title: "Olympus Corporation (OCPNY) Q3 2023 Earnings Call Transcript",
    image: "https://cdn.snapi.dev/images/v1/3/q/transcript46-1749834.jpg",
    site: "Seeking Alpha",
    text: "Olympus Corporation (OTCPK:OCPNF) Q3 2023 Earnings Conference Call February 10, 2023 1:00 AM ET Company Participants Yasuo Takeuchi - President and Chief Executive Officer Chikashi Takeda - Chief Financial Officer Nacho Abia - Chief Operating Officer Stefan Kaufmann - Chief Administrative Officer, Chief Strategy Officer and ESG Officer Pierre Boisier - Chief Quality Officer Conference Call Participants Chikashi Takeda Hello everyone. I am Chikashi Takeda, the CFO.",
    url: "https://seekingalpha.com/article/4577449-olympus-corporation-ocpny-q3-2023-earnings-call-transcript",
  },
  {
    symbol: "NRG",
    publishedDate: "2023-02-10 18:59:00",
    title:
      "NRG Energy, Inc. to Report Full Year and Fourth Quarter 2022 Financial Results on February 16, 2023",
    image: "https://cdn.snapi.dev/images/v1/p/g/conf10-1749836.jpg",
    site: "Business Wire",
    text: "HOUSTON--(BUSINESS WIRE)--NRG Energy, Inc. (NYSE: NRG) plans to report its Full Year and Fourth Quarter 2022 financial results on Thursday, February 16, 2023. Management will present the results during a conference call and webcast at 9:00 a.m. EST (8:00 a.m. CST). A live webcast of the conference call, including presentation materials, can be accessed through NRG's website at http://www.nrg.",
    url: "https://www.businesswire.com/news/home/20230210005389/en/NRG-Energy-Inc.-to-Report-Full-Year-and-Fourth-Quarter-2022-Financial-Results-on-February-16-2023/",
  },
  {
    symbol: "MODG",
    publishedDate: "2023-02-10 18:57:03",
    title:
      "Topgolf Callaway Brands Corp. (MODG) Q4 2022 Earnings Call Transcript",
    image: "https://cdn.snapi.dev/images/v1/5/b/transcript45-1749833.jpg",
    site: "Seeking Alpha",
    text: "Topgolf Callaway Brands Corp. (NYSE:MODG ) Q4 2022 Earnings Conference Call February 9, 2023 5:00 PM ET Company Participants Lauren Scott - Director of Investor Relations Chip Brewer - President and Chief Executive Officer Brian Lynch - Chief Financial Officer Patrick Burke - Senior Vice President of Global Finance Conference Call Participants Randal Konik - Jefferies Alex Perry - Bank of America Merrill Lynch Daniel Imbro - Stephens Inc. Joseph Altobello - Raymond James Michael Swartz - Truist Securities Casey Alexander - Compass Point Research & Trading, LLC Eric Wold - B. Riley Securities George Kelly - ROTH MKM Operator Good day, and welcome to the Topgolf Callaway Brands Fourth Quarter and Full-Year 2022 Earnings Conference Call.",
    url: "https://seekingalpha.com/article/4577448-topgolf-callaway-brands-corp-modg-q4-2022-earnings-call-transcript",
  },
  {
    symbol: "CORR",
    publishedDate: "2023-02-10 18:49:15",
    title: "CorEnergy (CORR) Flat As Market Gains: What You Should Know",
    image: "https://cdn.snapi.dev/images/v1/r/k/asset-management3-1749828.jpg",
    site: "Zacks Investment Research",
    text: "CorEnergy (CORR) closed the most recent trading day at $1.68, making no change from the previous trading session.",
    url: "https://www.zacks.com/stock/news/2053067/corenergy-corr-flat-as-market-gains-what-you-should-know",
  },
  {
    symbol: "CTLT",
    publishedDate: "2023-02-10 18:49:13",
    title: "Why Catalent Stock Was on Fire This Week",
    image:
      "https://cdn.snapi.dev/images/v1/k/q/urlhttps3a2f2fgfoolcdncom2feditorial2fimages2f7202602fpatient-and-physician-smiling-during-a-visitjpgopresizew400h400-1749830.jpg",
    site: "The Motley Fool",
    text: "The shares did exceptionally well considering the company had a ho-hum quarter.",
    url: "https://www.fool.com/investing/2023/02/10/why-catalent-stock-was-on-fire-this-week/",
  },
  {
    symbol: "STE",
    publishedDate: "2023-02-10 18:47:08",
    title: "Why Steris Stock Was a Flop This Week",
    image:
      "https://cdn.snapi.dev/images/v1/e/a/urlhttps3a2f2fgfoolcdncom2feditorial2fimages2f7204432fmedical-professional-holding-dollar-sign-paperweightjpgopresizew400h400-1749827.jpg",
    site: "The Motley Fool",
    text: "A big earnings miss turned investors off, as did reduced guidance.",
    url: "https://www.fool.com/investing/2023/02/10/why-steris-stock-was-a-flop-this-week/",
  },
  {
    symbol: "NXT",
    publishedDate: "2023-02-10 18:46:39",
    title: "NEXTracker: Keeping Track Off",
    image: "https://cdn.snapi.dev/images/v1/i/g/image-927267276-1749823.jpg",
    site: "Seeking Alpha",
    text: "Nextracker Inc. is a solar tracking business being spun out from Flex. The company has seen a successful public debut, after the IPO market was closed for a long time.",
    url: "https://seekingalpha.com/article/4577440-nextracker-keeping-track-off",
  },
  {
    symbol: "TMUS",
    publishedDate: "2023-02-10 18:45:00",
    title: "Can a Hot T-Mobile Stock Outperform in a Subscriber Slowdown?",
    image: "https://cdn.snapi.dev/images/v1/i/m/im-721985-1749824.jpg",
    site: "Barrons",
    text: "Wireless analysts Craig Moffett, who calls T-Mobile “the best house on a bad block,” has his doubts. The consequences for Verizon and AT&T could be worse.",
    url: "https://www.barrons.com/articles/can-a-hot-t-mobile-stock-outperform-in-a-subscriber-slowdown-fffaa77a",
  },
  {
    symbol: "MPWR",
    publishedDate: "2023-02-10 18:39:05",
    title: "Why Monolithic Power Systems Powered Up an 8% Gain This Week",
    image:
      "https://cdn.snapi.dev/images/v1/j/b/urlhttps3a2f2fgfoolcdncom2feditorial2fimages2f7204422fhand-removing-a-plug-from-a-wall-outletjpgopresizew400h400-1749819.jpg",
    site: "The Motley Fool",
    text: "The combination of an earnings beat and a dividend raise proved very tempting for investors.",
    url: "https://www.fool.com/investing/2023/02/10/why-monolithic-power-systems-powered-up-an-8-gain/",
  },
];

// {
//   symbol: "AMZN",
//   publishedDate: "2023-02-11 02:16:49",
//   title: "Amazon: Turnaround Underway",
//   image: "https://cdn.snapi.dev/images/v1/k/r/image-1252468735-1749905.jpg",
//   site: "Seeking Alpha",
//   text: "Amazon reported solid numbers for the fourth quarter, beating consensus estimates in most metrics. However, bears claim that AWS slowdown is devastating as well as the company lacks of showing sustainable profits.",
//   url: "https://seekingalpha.com/article/4577490-amazon-turnaround-underway",
// },
export default function Home() {
  const trimText = (text: string): string => {
    if (String(text).length > 180) {
      return text.substring(0, 179) + "...";
    }

    return text;
  };

  return (
    <>
      <h2 className="p-3 text-3xl bg-white rounded-lg">
        <input type="text" className="border border-black" />
      </h2>
      <div className="@container/news">
        <div className="flex flex-col pl-4 pr-20 bg-white rounded-lg">
          {data.map((datum) => (
            <div
              className="news_card @2xl/news:flex-row @xl/news:h-60"
              key={datum.publishedDate}
            >
              <Image
                src={datum.image}
                width="240"
                height="200"
                className="object-cover"
                alt={datum.title}
              />
              <div>
                <span className="text-sm text-grey-500">
                  {dayjs(datum.publishedDate).format("YYYY-MM-DD")}
                </span>
                <h4 className="mt-0.5 text-2xl font-bold">{datum.title}</h4>
                <p
                  className="mt-2 text-lg grow text-grey-600"
                  style={{ hyphens: "auto" }}
                >
                  {trimText(datum.text)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
