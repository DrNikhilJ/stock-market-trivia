// script.js

const allQuestions = [
    {
        question: "Which index is considered the benchmark index of the Indian stock market?",
        choices: ["NIFTY Bank", "Sensex", "Dow Jones", "FTSE 100"],
        correctAnswer: "Sensex"
    },
    {
        question: "What is the minimum investment amount required for Systematic Investment Plans (SIPs) in most mutual funds?",
        choices: ["₹100", "₹500", "₹1000", "₹5000"],
        correctAnswer: "₹500"
    },
    {
        question: "What is 'anchoring bias' in investing?",
        choices: [
            "Relying too heavily on the first piece of information received",
            "Always investing in blue-chip stocks",
            "Following market trends blindly",
            "Investing only in familiar companies"
        ],
        correctAnswer: "Relying too heavily on the first piece of information received"
    },
    {
        question: "Which of these is a defensive sector in the Indian stock market?",
        choices: ["FMCG", "Real Estate", "Metal", "Banking"],
        correctAnswer: "FMCG"
    },
    {
        question: "What is the trading time for the equity market in India?",
        choices: ["9:15 AM to 3:30 PM", "9:00 AM to 4:00 PM", "10:00 AM to 5:00 PM", "9:30 AM to 4:30 PM"],
        correctAnswer: "9:15 AM to 3:30 PM"
    },
    {
        question: "What is 'herding' in behavioral finance?",
        choices: [
            "Following what other investors are doing",
            "Investing in agricultural stocks",
            "Diversifying portfolio",
            "Trading in penny stocks"
        ],
        correctAnswer: "Following what other investors are doing"
    },
    {
        question: "Which of these is NOT a type of market order?",
        choices: ["Stop Loss", "Limit Order", "Margin Order", "Market Order"],
        correctAnswer: "Margin Order"
    },
    {
        question: "What is the minimum public shareholding required for a company to remain listed on Indian stock exchanges?",
        choices: ["25%", "10%", "35%", "51%"],
        correctAnswer: "25%"
    },
    {
        question: "What is 'confirmation bias' in investing?",
        choices: [
            "Seeking information that confirms existing beliefs",
            "Verifying stock prices regularly",
            "Checking company financials",
            "Following broker recommendations"
        ],
        correctAnswer: "Seeking information that confirms existing beliefs"
    },
    {
        question: "Which index represents mid-cap companies in India?",
        choices: ["Nifty Midcap 100", "Sensex Next 50", "BSE 200", "Nifty 100"],
        correctAnswer: "Nifty Midcap 100"
    },
    {
        question: "What is the capital gains tax holding period for equity investments to be considered long-term?",
        choices: ["1 year", "2 years", "3 years", "5 years"],
        correctAnswer: "1 year"
    },
    {
        question: "What is 'loss aversion' in behavioral finance?",
        choices: [
            "Feeling more pain from losses than pleasure from gains",
            "Avoiding all risky investments",
            "Selling stocks at a loss",
            "Not investing in bear markets"
        ],
        correctAnswer: "Feeling more pain from losses than pleasure from gains"
    },
    {
        question: "What is the full form of ASBA in IPO applications?",
        choices: [
            "Application Supported by Blocked Amount",
            "Automated Stock Buying Application",
            "Advanced Share Booking Amount",
            "Authorized Stock Broker Account"
        ],
        correctAnswer: "Application Supported by Blocked Amount"
    },
    {
        question: "Which of these is NOT a stock market index in India?",
        choices: ["KOSPI", "Nifty Bank", "BSE SmallCap", "Nifty IT"],
        correctAnswer: "KOSPI"
    },
    {
        question: "What is the 'disposition effect' in investing?",
        choices: [
            "Selling winning stocks too early and holding losing stocks too long",
            "Buying stocks at market open",
            "Trading based on news",
            "Investing in IPOs only"
        ],
        correctAnswer: "Selling winning stocks too early and holding losing stocks too long"
    },
    {
        question: "What is the minimum lot size for trading in F&O segment?",
        choices: ["Market Lot", "100 shares", "50 shares", "500 shares"],
        correctAnswer: "Market Lot"
    },
    {
        question: "Which regulatory body governs mutual funds in India?",
        choices: ["SEBI", "RBI", "AMFI", "IRDA"],
        correctAnswer: "SEBI"
    },
    {
        question: "What is 'recency bias' in investing?",
        choices: [
            "Giving more importance to recent events",
            "Investing in new companies only",
            "Following latest market trends",
            "Trading based on past performance"
        ],
        correctAnswer: "Giving more importance to recent events"
    },
    {
        question: "What is the typical circuit breaker limit for individual stocks in Indian markets?",
        choices: ["20%", "10%", "15%", "5%"],
        correctAnswer: "20%"
    },
    {
        question: "Which of these is considered a penny stock in India?",
        choices: [
            "Stock trading below ₹10",
            "Stock with market cap below ₹100 crore",
            "Stock with zero trading volume",
            "Stock listed only on BSE"
        ],
        correctAnswer: "Stock trading below ₹10"
    },
    {
        question: "What is 'mental accounting' in behavioral finance?",
        choices: [
            "Treating money differently based on its source",
            "Calculating profits daily",
            "Maintaining trading records",
            "Planning tax savings"
        ],
        correctAnswer: "Treating money differently based on its source"
    },
    {
        question: "What is the maximum number of members allowed in a trading group?",
        choices: ["50", "100", "200", "No limit"],
        correctAnswer: "No limit"
    },
    {
        question: "Which of these is NOT a type of mutual fund?",
        choices: ["Leverage Fund", "Index Fund", "Debt Fund", "Hybrid Fund"],
        correctAnswer: "Leverage Fund"
    },
    {
        question: "What is 'overconfidence bias' in investing?",
        choices: [
            "Overestimating one's investment abilities",
            "Taking excessive risks",
            "Trading frequently",
            "Following expert advice blindly"
        ],
        correctAnswer: "Overestimating one's investment abilities"
    },
    {
        question: "What is the settlement cycle for equity trades in India?",
        choices: ["T+1", "T+2", "T+3", "T+5"],
        correctAnswer: "T+1"
    },
    {
        question: "Which index tracks the performance of PSU banks?",
        choices: ["Nifty PSU Bank", "BSE PSU", "Nifty Bank", "BSE Bankex"],
        correctAnswer: "Nifty PSU Bank"
    },
    {
        question: "What is 'halo effect' in investing?",
        choices: [
            "Extending positive impressions of one aspect to everything",
            "Investing in popular stocks",
            "Following market leaders",
            "Buying stocks during bull runs"
        ],
        correctAnswer: "Extending positive impressions of one aspect to everything"
    },
    {
        question: "What is the minimum investment required for a retail investor in an IPO?",
        choices: ["One lot", "100 shares", "₹15,000", "₹10,000"],
        correctAnswer: "One lot"
    },
    {
        question: "Which of these is a market breadth indicator?",
        choices: ["Advance-Decline Ratio", "P/E Ratio", "Dividend Yield", "Book Value"],
        correctAnswer: "Advance-Decline Ratio"
    },
    {
        question: "What is 'self-attribution bias' in investing?",
        choices: [
            "Taking credit for successes but blaming failures on external factors",
            "Making all investment decisions alone",
            "Not following market advice",
            "Avoiding professional help"
        ],
        correctAnswer: "Taking credit for successes but blaming failures on external factors"
    },
    {
        question: "What is the face value of most stocks in India?",
        choices: ["₹10", "₹100", "₹1", "₹5"],
        correctAnswer: "₹10"
    },
    {
        question: "Which agency provides credit ratings for Indian companies?",
        choices: ["CRISIL", "NASDAQ", "BSE", "NSE"],
        correctAnswer: "CRISIL"
    },
    {
        question: "What is 'home bias' in investing?",
        choices: [
            "Preferring to invest in domestic markets",
            "Investing in real estate only",
            "Trading from home",
            "Following local brokers"
        ],
        correctAnswer: "Preferring to invest in domestic markets"
    },
    {
        question: "What is the minimum capital required for day trading in India?",
        choices: ["₹50,000", "₹1,00,000", "₹25,000", "No minimum requirement"],
        correctAnswer: "No minimum requirement"
    },
    {
        question: "Which of these is NOT a valid stop loss order type?",
        choices: ["Trailing Profit", "Trailing Stop", "Stop Limit", "Stop Market"],
        correctAnswer: "Trailing Profit"
    },
    {
        question: "What is 'regret aversion' in behavioral finance?",
        choices: [
            "Making decisions to avoid feeling regret later",
            "Never selling at a loss",
            "Avoiding risky investments",
            "Not investing in bear markets"
        ],
        correctAnswer: "Making decisions to avoid feeling regret later"
    },
    {
        question: "What is the minimum market capitalization for a company to be included in Nifty 50?",
        choices: ["₹5,000 crore", "₹10,000 crore", "₹15,000 crore", "significantly larger than the smallest constituent in the index"],
        correctAnswer: "significantly larger than the smallest constituent in the index"
    },
    {
        question: "Which of these is a volatility index in India?",
        choices: ["India VIX", "VSI", "INX", "VOL 50"],
        correctAnswer: "India VIX"
    },
    {
        question: "What is 'availability bias' in investing?",
        choices: [
            "Overemphasizing easily recalled information",
            "Trading only in liquid stocks",
            "Following readily available advice",
            "Investing in popular stocks"
        ],
        correctAnswer: "Overemphasizing easily recalled information"
    },
    {
        question: "What is the maximum permissible investment in tax-saving ELSS mutual funds under Section 80C?",
        choices: ["₹1.5 lakh", "₹2 lakh", "₹1 lakh", "₹50,000"],
        correctAnswer: "₹1.5 lakh"
    },
    {
        question: "Which of these is NOT a valid chart pattern?",
        choices: ["Triple Bottom", "Diamond Top", "Square Head", "Head and Shoulders"],
        correctAnswer: "Square Head"
    },
    {
        question: "What is 'hindsight bias' in investing?",
        choices: [
            "Believing past events were predictable",
            "Learning from past mistakes",
            "Following historical trends",
            "Using past performance for prediction"
        ],
        correctAnswer: "Believing past events were predictable"
    },
    {
        question: "What is the minimum ticket size for investing in REITs in India?",
        choices: ["₹50,000", "₹10,000", "₹1,00,000", "₹25,000"],
        correctAnswer: "₹50,000"
    },
    {
        question: "Which of these is a defensive investment strategy?",
        choices: ["Dollar-Cost Averaging", "Momentum Trading", "Day Trading", "Swing Trading"],
        correctAnswer: "Dollar-Cost Averaging"
    },
    {
        question: "What is 'representative bias' in investing?",
        choices: [
            "Making decisions based on stereotypes",
            "Following market representatives",
            "Investing in index funds",
            "Trading based on tips"
        ],
        correctAnswer: "Making decisions based on stereotypes"
    },
    {
        question: "What is the maximum number of stocks allowed in a single order in India?",
        choices: ["No limit", "10,000", "5,000", "1,000"],
        correctAnswer: "No limit"
    },
    {
        question: "Which of these is NOT a valid candlestick pattern?",
        choices: ["Triple Cross", "Doji", "Hammer", "Shooting Star"],
        correctAnswer: "Triple Cross"
    },
    {
        question: "What is 'status quo bias' in investing?",
        choices: [
            "Preference to keep things as they are",
            "Following market trends",
            "Maintaining portfolio balance",
            "Sticking to blue-chip stocks"
        ],
        correctAnswer: "Preference to keep things as they are"
    },
    {
        question: "What is the standard lot size for currency futures in India?",
        choices: ["1000", "USD 1000", "2000", "5000"],
        correctAnswer: "1000"
    },
    {
        question: "Which of these is considered a leading indicator?",
        choices: ["Nifty Bank", "GDP Growth", "Inflation Rate", "Unemployment Rate"],
        correctAnswer: "GDP Growth"
    },
    {
        question: "What is 'cognitive dissonance' in investing?",
        choices: [
            "Mental discomfort from conflicting beliefs",
            "Analysis paralysis",
            "Fear of trading",
            "Market uncertainty"
        ],
        correctAnswer: "Mental discomfort from conflicting beliefs"
    },
    {
        question: "What is the margin requirement for intraday equity trading in India?",
        choices: ["SPAN + Exposure Margin", "50%", "100%", "20%"],
        correctAnswer: "SPAN + Exposure Margin"
    },
    {
        question: "Which of these is NOT a valid market timing strategy?",
        choices: ["Reverse Averaging", "Value Averaging", "Rupee Cost Averaging", "Lump Sum Investing"],
        correctAnswer: "Reverse Averaging"
    },
       {
        question: "What does 'IPO' stand for?",
        choices: ["Initial Public Offering", "Investment Portfolio Optimization", "Income Property Opportunity", "International Placement Offer"],
        correctAnswer: "Initial Public Offering"
    },
    {
        question: "What is the role of a 'Depository Participant' in the Indian stock market?",
        choices: ["To provide a platform for trading shares", "To facilitate the dematerialization and holding of securities", "To regulate the stock exchanges", "To underwrite IPOs"],
        correctAnswer: "To facilitate the dematerialization and holding of securities"
    },
    {
        question: "What is the purpose of 'circuit breakers' in the stock market?",
        choices: ["To halt trading temporarily to prevent panic selling or buying", "To protect investors from fraudulent brokers", "To ensure fair pricing of securities", "To facilitate block trades"],
        correctAnswer: "To halt trading temporarily to prevent panic selling or buying"
    },
    {
        question: "Which of the following is a tool used for technical analysis in the stock market?",
        choices: ["Fundamental ratios", "Financial statements", "Moving averages", "Management interviews"],
        correctAnswer: "Moving averages"
    },
     {
        question: "Which of these is NOT a function of the Securities and Exchange Board of India (SEBI)?",
        choices: ["Regulating the stock exchanges", "Protecting the interests of investors", "Providing loans to companies", "Preventing insider trading"],
        correctAnswer: "Providing loans to companies"
    },
    {
        question: "What is the 'book value' of a company?",
        choices: ["The market value of the company's assets", "The total revenue of the company", "The net asset value of the company", "The value of the company's brand"],
        correctAnswer: "The net asset value of the company"
    },
    {
        question: "What is a 'bear market'?",
        choices: ["A market characterized by rising prices", "A market characterized by declining prices", "A market with high volatility", "A market with low trading volume"],
        correctAnswer: "A market characterized by declining prices"
    },
    {
        question: "What is a 'bull market'?",
        choices: ["A market characterized by rising prices", "A market characterized by declining prices", "A market with high volatility", "A market with low trading volume"],
        correctAnswer: "A market characterized by rising prices"
    },
    {
        question: "What is the 'P/E ratio'?",
        choices: ["Price to Earnings Ratio", "Profit to Equity Ratio", "Price to Expense Ratio", "Portfolio Efficiency Ratio"],
        correctAnswer: "Price to Earnings Ratio"
    },
    {
        question: "What is the significance of the 'record date' in the context of dividends?",
        choices: ["The date on which the dividend is announced", "The date on which the dividend is paid", "The date on which you must be a shareholder to receive the dividend", "The date on which the company's financial year ends"],
        correctAnswer: "The date on which you must be a shareholder to receive the dividend"
    },
   {
        question: "What is a 'demat account'?",
        choices: ["A bank account for trading", "An account to hold shares in electronic form", "An account for trading commodities", "An account for fixed deposits"],
        correctAnswer: "An account to hold shares in electronic form"
    },
    {
        question: "What is 'insider trading'?",
        choices: ["Trading based on publicly available information", "Trading by company employees", "Trading based on non-public, confidential information", "Trading in government bonds"],
        correctAnswer: "Trading based on non-public, confidential information"
    },
    {
        question: "What is 'liquidity' in the context of the stock market?",
        choices: ["The ability to easily buy or sell an asset", "The profitability of a company", "The volatility of a stock", "The dividend yield of a stock"],
        correctAnswer: "The ability to easily buy or sell an asset"
    },
    {
        question: "What is a 'blue-chip stock'?",
        choices: ["A stock with high volatility", "A stock with low trading volume", "A stock of a large, well-established company", "A stock that pays high dividends"],
        correctAnswer: "A stock of a large, well-established company"
    },
    {
        question: "What is a 'bonus issue'?",
        choices: ["A dividend paid in cash", "An additional share issued to existing shareholders for free", "A discount offered on new shares", "A loan given to employees to buy shares"],
        correctAnswer: "An additional share issued to existing shareholders for free"
    },
        {
        question: "What is a 'rights issue'?",
        choices: ["An issue of shares to existing shareholders at a discounted price", "An issue of shares to government employees only", "An issue of shares to foreign investors only", "An issue of shares to new investors only"],
        correctAnswer: "An issue of shares to existing shareholders at a discounted price"
    },
    {
        question: "What is 'face value' of a share?",
        choices: ["The current market price of the share", "The original cost of the share when it was first issued", "The value stated in the company's documents", "The book value of the share"],
        correctAnswer: "The value stated in the company's documents"
    },
    {
        question: "What is a 'market capitalization' of a company?",
        choices: ["The total assets of the company", "The total revenue of the company", "The total value of all outstanding shares of the company", "The total debt of the company"],
        correctAnswer: "The total value of all outstanding shares of the company"
    },
    {
        question: "What is 'free float market capitalization'?",
        choices: ["Market cap excluding promoter holdings", "Total assets minus liabilities", "Liquid assets only", "Market cap of penny stocks"],
        correctAnswer: "Market cap excluding promoter holdings"
    },
    {
        question: "What is 'beta' in finance?",
        choices: ["A measure of a stock's volatility in relation to the market", "The dividend yield of a stock", "The P/E ratio of a stock", "The market capitalization of a stock"],
        correctAnswer: "A measure of a stock's volatility in relation to the market"
    },
    {
        question: "What is a 'call option'?",
        choices: ["The right to sell an asset at a specific price", "The obligation to buy an asset at a specific price", "The right to buy an asset at a specific price", "The obligation to sell an asset at a specific price"],
        correctAnswer: "The right to buy an asset at a specific price"
    },
    {
        question: "What is a 'put option'?",
        choices: ["The right to buy an asset at a specific price", "The obligation to sell an asset at a specific price", "The right to sell an asset at a specific price", "The obligation to buy an asset at a specific price"],
        correctAnswer: "The right to sell an asset at a specific price"
    },
    {
        question: "What is 'derivatives trading'?",
        choices: ["Trading in underlying assets", "Trading contracts based on the value of an underlying asset", "Trading in government bonds", "Trading in fixed deposits"],
        correctAnswer: "Trading contracts based on the value of an underlying asset"
    },
    {
        question: "What is the role of a 'broker' in the stock market?",
        choices: ["To provide financial advice to investors", "To execute buy and sell orders on behalf of clients", "To regulate the stock exchanges", "To underwrite IPOs"],
        correctAnswer: "To execute buy and sell orders on behalf of clients"
    },
    {
        question: "What is 'short selling'?",
        choices: ["Buying shares with the intention of holding them long-term", "Selling shares that you don't own with the expectation of buying them back at a lower price", "Selling shares at a discount", "Selling shares to company insiders"],
        correctAnswer: "Selling shares that you don't own with the expectation of buying them back at a lower price"
    },
      {
        question: "What is 'Mutual Fund NAV'?",
        choices: ["Net Asset Value", "New Account Value", "National Average Value", "Nominal Asset Value"],
        correctAnswer: "Net Asset Value"
    },
    {
        question: "What is the meaning of 'KYC' in the context of investing?",
        choices: ["Know Your Customer", "Keep Your Capital", "Key Yield Component", "Know Your Credit"],
        correctAnswer: "Know Your Customer"
    },
    {
        question: "Which tax is levied on the sale of shares?",
        choices: ["Securities Transaction Tax (STT)", "Goods and Services Tax (GST)", "Income Tax", "Wealth Tax"],
        correctAnswer: "Securities Transaction Tax (STT)"
    },
    {
        question: "What is 'stop-loss order'?",
        choices: ["An order to buy shares at a lower price", "An order to automatically sell shares when the price falls to a specified level", "An order to hold shares indefinitely", "An order to buy shares when the price reaches a new high"],
        correctAnswer: "An order to automatically sell shares when the price falls to a specified level"
    },
    {
        question: "What does CAGR stand for?",
        choices: ["Compound Annual Growth Rate", "Company Annual Gross Return", "Consolidated Asset Growth Ratio", "Cumulative Average Gain Result"],
        correctAnswer: "Compound Annual Growth Rate"
    },
        {
        question: "What is the full form of SME IPO?",
        choices: ["Small and Medium Enterprise Initial Public Offering", "Stock Market Exchange Initial Public Offer", "Securities and Mutual Funds Exchange IPO", "Small Market Entities IPO"],
        correctAnswer: "Small and Medium Enterprise Initial Public Offering"
    },
    {
        question: "What is 'SEBI's Investor Protection Fund' used for?",
        choices: ["For investing in government bonds", "To compensate investors for losses due to broker defaults", "For funding new stock exchanges", "For promoting financial literacy"],
        correctAnswer: "To compensate investors for losses due to broker defaults"
    },
    {
        question: "What is 'Algorithmic Trading'?",
        choices: ["Trading based on human emotions", "Trading based on news articles", "Trading using computer programs and algorithms", "Trading in agricultural commodities"],
        correctAnswer: "Trading using computer programs and algorithms"
    },
    {
        question: "What does 'EBITDA' stand for?",
        choices: ["Earnings Before Interest, Taxes, Depreciation, and Amortization", "Equity Before Income, Taxes, Dividends, and Assets", "Expense Before Interest, Taxes, Depreciation, and Allocation", "Earnings Based on Investment, Taxation, and Depreciation Analysis"],
        correctAnswer: "Earnings Before Interest, Taxes, Depreciation, and Amortization"
    },
    {
        question: "What is 'depreciation'?",
        choices: ["Increase in the value of an asset", "Decrease in the value of an asset due to wear and tear", "A type of dividend", "A tax on stock trading"],
        correctAnswer: "Decrease in the value of an asset due to wear and tear"
    },
        {
        question: "What is the 'Sharpe Ratio'?",
        choices: ["A measure of risk-adjusted return", "A measure of dividend yield", "A measure of market capitalization", "A measure of P/E ratio"],
        correctAnswer: "A measure of risk-adjusted return"
    },
    {
        question: "What is 'Earnings Yield'?",
        choices: ["Earnings divided by price", "Price divided by earnings", "Earnings divided by sales", "Sales divided by earnings"],
        correctAnswer: "Earnings divided by price"
    },
    {
        question: "What is 'PEG Ratio'?",
        choices: ["Price/Earnings to Growth Ratio", "Price/Equity Growth Ratio", "Portfolio Earnings Growth Ratio", "Profit Estimation Growth Ratio"],
        correctAnswer: "Price/Earnings to Growth Ratio"
    },
    {
        question: "What does 'NAV' stand for in Mutual Funds?",
        choices: ["Net Asset Value", "New Account Value", "National Average Value", "Nominal Asset Value"],
        correctAnswer: "Net Asset Value"
    },
    {
        question: "What is 'expense ratio' in a mutual fund?",
        choices: ["The fund's profit divided by its expenses", "The annual cost of operating the fund, expressed as a percentage of the fund's assets", "The cost of buying and selling stocks in the fund", "The fund manager's salary"],
        correctAnswer: "The annual cost of operating the fund, expressed as a percentage of the fund's assets"
    },
        {
        question: "What is a 'sector fund'?",
        choices: ["A fund that invests in a specific industry or sector", "A fund that invests in government bonds", "A fund that invests in international stocks", "A fund that invests in small-cap stocks"],
        correctAnswer: "A fund that invests in a specific industry or sector"
    },
    {
        question: "What is 'index fund'?",
        choices: ["A fund that invests in a broad market index", "A fund that invests in a specific sector", "A fund that invests in international stocks", "A fund that invests in small-cap stocks"],
        correctAnswer: "A fund that invests in a broad market index"
    },
    {
        question: "What is 'SIP' in mutual funds?",
        choices: ["Systematic Investment Plan", "Stock Investment Program", "Savings Investment Portfolio", "Secure Income Plan"],
        correctAnswer: "Systematic Investment Plan"
    },
    {
        question: "What is 'Lump Sum Investment'?",
        choices: ["Investing a fixed amount at regular intervals", "Investing a single, large amount", "Investing in only one stock", "Investing in only debt instruments"],
        correctAnswer: "Investing a single, large amount"
    },
    {
        question: "What is a 'Growth Stock'?",
        choices: ["A stock that has a high dividend yield", "A stock that is expected to grow at an above-average rate", "A stock that is considered undervalued", "A stock that is traded on a foreign exchange"],
        correctAnswer: "A stock that is expected to grow at an above-average rate"
    },
    {
        question: "What is 'Value Investing'?",
        choices: ["Investing in stocks that are considered overvalued", "Investing in stocks that are considered undervalued", "Investing in stocks with high growth potential", "Investing in stocks with low dividend yields"],
        correctAnswer: "Investing in stocks that are considered undervalued"
    },
    {
        question: "What is 'dividend yield'?",
        choices: ["Annual dividend per share divided by the earnings per share", "Annual dividend per share divided by the stock price", "Stock price divided by the annual dividend per share", "Earnings per share divided by the annual dividend per share"],
        correctAnswer: "Annual dividend per share divided by the stock price"
    },
   {
        question: "What is the 'ex-dividend date'?",
        choices: ["The date on which the dividend is announced", "The date on which the dividend is paid", "The date after which a buyer is not entitled to the upcoming dividend", "The date on which the company's financial year ends"],
        correctAnswer: "The date after which a buyer is not entitled to the upcoming dividend"
    },
    {
        question: "What is 'Stock Split'?",
        choices: ["A company merging with another company", "A company dividing its existing shares into multiple shares", "A company issuing bonus shares", "A company repurchasing its own shares"],
        correctAnswer: "A company dividing its existing shares into multiple shares"
    },
    {
        question: "What is 'Buyback of Shares'?",
        choices: ["A company selling its shares in the market", "A company repurchasing its own shares from the market", "A company issuing new shares to the public", "A company giving shares to its employees"],
        correctAnswer: "A company repurchasing its own shares from the market"
    },
    {
        question: "What is 'Free Float Factor'?",
        choices: ["The portion of shares readily available for trading in the market", "The portion of shares held by the government", "The portion of shares held by company insiders", "The portion of shares held by foreign investors"],
        correctAnswer: "The portion of shares readily available for trading in the market"
    },
    {
        question: "What is the function of 'Clearing Corporation'?",
        choices: ["To regulate the stock market", "To facilitate the settlement of trades and manage risk", "To provide financial advice to investors", "To underwrite IPOs"],
        correctAnswer: "To facilitate the settlement of trades and manage risk"
    },
    {
        question: "What is 'Margin Trading'?",
        choices: ["Trading with your own funds only", "Trading with borrowed funds from a broker", "Trading in government bonds only", "Trading in fixed deposits only"],
        correctAnswer: "Trading with borrowed funds from a broker"
    },
     {
        question: "What is 'Penny Stock'?",
        choices: ["A stock with a high market capitalization", "A stock with low trading volume", "A stock trading at a very low price", "A stock that pays high dividends"],
        correctAnswer: "A stock trading at a very low price"
    },
    {
        question: "What is the role of a 'Merchant Banker' in an IPO?",
        choices: ["To regulate the stock exchanges", "To underwrite IPOs and manage the process", "To provide loans to companies", "To represent the interests of investors"],
        correctAnswer: "To underwrite IPOs and manage the process"
    },
        {
        question: "What is 'Offer for Sale (OFS)'?",
        choices: ["A method for companies to raise new capital", "A method for promoters to reduce their stake in a listed company", "A method for companies to distribute dividends", "A method for companies to issue bonus shares"],
        correctAnswer: "A method for promoters to reduce their stake in a listed company"
    },
    {
        question: "What is the difference between 'NSE and BSE'?",
        choices: ["They are the same stock exchange", "NSE is for derivatives, BSE is for equity", "NSE is National Stock Exchange, BSE is Bombay Stock Exchange", "BSE is government owned, NSE is private"],
        correctAnswer: "NSE is National Stock Exchange, BSE is Bombay Stock Exchange"
    },
        {
        question: "What does 'FV' stand for in the context of stocks?",
        choices: ["Future Value", "Fair Value", "Face Value", "Financial Volume"],
        correctAnswer: "Face Value"
    },
    {
        question: "Which of the following is a leading indicator of economic activity?",
        choices: ["Unemployment rate", "Consumer Price Index (CPI)", "Gross Domestic Product (GDP)", "Purchasing Managers' Index (PMI)"],
        correctAnswer: "Purchasing Managers' Index (PMI)"
    },
    {
        question: "What does the term 'short covering' refer to?",
        choices: ["Buying back shares to close a short position", "Selling shares at a loss", "Investing in short-term bonds", "Hedging against currency fluctuations"],
        correctAnswer: "Buying back shares to close a short position"
    },
    {
        question: "What is the formula for calculating simple interest?",
        choices: ["P × R × T", "P + R + T", "P × R / T", "P / (R × T)"],
        correctAnswer: "P × R × T"
    },
    {
        question: "What is the main objective of fundamental analysis?",
        choices: ["To predict short-term price movements", "To assess the intrinsic value of a company", "To identify chart patterns", "To analyze market sentiment"],
        correctAnswer: "To assess the intrinsic value of a company"
    },
    {
        question: "What is the role of a custodian in the stock market?",
        choices: ["To hold securities on behalf of investors", "To provide brokerage services", "To regulate stock exchanges", "To underwrite IPOs"],
        correctAnswer: "To hold securities on behalf of investors"
    },
    {
        question: "Which of the following is a lagging indicator of economic activity?",
        choices: ["Housing starts", "Money supply", "Retail sales", "Unemployment rate"],
        correctAnswer: "Unemployment rate"
    },
    {
        question: "What is 'Corporate Action'?",
        choices: ["Actions taken by shareholders", "Actions taken by the government", "Actions taken by a company that affect the value of its shares", "Actions taken by stock brokers"],
        correctAnswer: "Actions taken by a company that affect the value of its shares"
    },
    {
        question: "What is 'face value' in bond?",
        choices: ["The yield of the bond", "The coupon rate of the bond", "The price at which the bond is redeemed at maturity", "The current market price of the bond"],
        correctAnswer: "The price at which the bond is redeemed at maturity"
    },
    {
        question: "What is 'yield to maturity'?",
        choices: ["Total return anticipated on a bond if it is held until it matures", "The profit margin on the sale of a bond", "The tax rate on the bond's income", "The cost of issuing the bond"],
        correctAnswer: "Total return anticipated on a bond if it is held until it matures"
    },
    {
        question: "What is 'investment grade' in bonds?",
        choices: ["Bond with low credit rating", "Bond with highest yield", "Bond with high credit rating", "Bond sold at discount"],
        correctAnswer: "Bond with high credit rating"
    },
    {
        question: "What is 'junk bond'?",
        choices: ["High yield, high risk bonds", "Government bonds", "Bonds with low yields", "Tax free bonds"],
        correctAnswer: "High yield, high risk bonds"
    },
   {
        question: "What is 'sovereign gold bond'?",
        choices: ["Gold bars issued by the government", "Gold coins issued by private companies", "Government securities denominated in grams of gold", "Gold ETF traded on the stock market"],
        correctAnswer: "Government securities denominated in grams of gold"
    },
    {
        question: "Which organization launches Sovereign Gold Bonds?",
        choices: ["SEBI", "RBI", "Ministry of Finance", "NITI Aayog"],
        correctAnswer: "RBI"
    },
    {
        question: "What is 'Treasury Bill'?",
        choices: ["Short-term debt instruments issued by the government", "Long-term debt instruments issued by corporations", "Bonds issued by state governments", "Bonds issued by municipal corporations"],
        correctAnswer: "Short-term debt instruments issued by the government"
    },
    {
        question: "What is the role of 'Central Depository Services Limited (CDSL)' in the Indian stock market?",
        choices: ["Managing the stock exchange", "Providing brokerage services", "Facilitating dematerialization of securities", "Regulating mutual funds"],
        correctAnswer: "Facilitating dematerialization of securities"
    },
    {
        question: "What is the role of 'National Securities Depository Limited (NSDL)' in the Indian stock market?",
        choices: ["Managing the stock exchange", "Providing brokerage services", "Facilitating dematerialization of securities", "Regulating mutual funds"],
        correctAnswer: "Facilitating dematerialization of securities"
    },
    {
        question: "What is a 'Currency Future'?",
        choices: ["A contract to buy or sell a currency at a future date", "A contract to exchange stocks for currency", "A contract to buy government bonds", "A contract to buy precious metals"],
        correctAnswer: "A contract to buy or sell a currency at a future date"
    },
    {
        question: "What is 'Commodity Trading'?",
        choices: ["Trading in currencies", "Trading in agricultural products, metals, and energy resources", "Trading in real estate", "Trading in government bonds"],
        correctAnswer: "Trading in agricultural products, metals, and energy resources"
    },
    {
        question: "What is 'MCX'?",
        choices: ["Mutual fund Clearing Exchange", "Multi Commodity Exchange", "Merchant Credit Exchange", "Money Control Exchange"],
        correctAnswer: "Multi Commodity Exchange"
    },
    {
        question: "What is 'NCDEX'?",
        choices: ["National Commodity and Derivatives Exchange", "National Credit and Debt Exchange", "New Company Derivatives Exchange", "Nominal Commodity and Derivatives Exchange"],
        correctAnswer: "National Commodity and Derivatives Exchange"
    },
    {
        question: "What is the meaning of 'Delivery Based Trading'?",
        choices: ["Buying and selling stock without actual transfer", "Taking actual possession of shares bought", "Selling shares short", "Investing in derivatives"],
        correctAnswer: "Taking actual possession of shares bought"
    },
    {
        question: "What is the meaning of 'Intraday Trading'?",
        choices: ["Investing for long term", "Taking actual possession of shares bought", "Buying and selling stock on same day", "Investing in foreign markets"],
        correctAnswer: "Buying and selling stock on same day"
    },
    {
        question: "What does 'DERIVATIVES' mean?",
        choices: ["Commodity with an intrinsic value", "Contract whose value is derived from an underlying asset", "Foreign exchange reserves", "Assets of a company"],
        correctAnswer: "Contract whose value is derived from an underlying asset"
    },
    {
        question: "What is 'Hedging'?",
        choices: ["Reducing risk by taking an offsetting position", "Investing in high-risk assets", "Investing in a single stock", "Selling shares at a loss"],
        correctAnswer: "Reducing risk by taking an offsetting position"
    },
    {
        question: "What is 'Arbitrage'?",
        choices: ["Buying and selling an asset simultaneously in different markets", "Investing in a single stock", "Selling shares at a loss", "Borrowing money at a high interest rate"],
        correctAnswer: "Buying and selling an asset simultaneously in different markets"
    },
    {
        question: "What is 'SEBI Investor Grievance Redressal System'?",
        choices: ["Platform for companies to address problems", "Online platform for investors to lodge complaints", "System to track economic indicators", "Tool to calculate investment returns"],
        correctAnswer: "Online platform for investors to lodge complaints"
    },
      {
        question: "Which of these is a measure of inflation?",
        choices: ["Consumer Price Index (CPI)", "Gross Domestic Product (GDP)", "Unemployment rate", "Interest rates"],
        correctAnswer: "Consumer Price Index (CPI)"
    },
    {
        question: "What is the meaning of 'NAV' in Real Estate Investment Trusts (REITs)?",
        choices: ["Net Asset Value", "New Account Value", "National Average Value", "Nominal Asset Value"],
        correctAnswer: "Net Asset Value"
    },
    {
        question: "What is 'Real Estate Investment Trust (REIT)'?",
        choices: ["A company that owns or finances income-producing real estate", "A type of mutual fund that invests in stocks", "A company that builds residential properties", "A bank that provides home loans"],
        correctAnswer: "A company that owns or finances income-producing real estate"
    },
    {
        question: "What is 'Infrastructure Investment Trust (InvIT)'?",
        choices: ["A trust that invests in infrastructure projects", "A type of mutual fund that invests in bonds", "A company that builds highways", "A bank that provides loans for infrastructure development"],
        correctAnswer: "A trust that invests in infrastructure projects"
    },
    {
        question: "What is 'Index Investing'?",
        choices: ["Investing in a specific stock", "Investing in a market index, such as Nifty 50", "Investing in a single sector", "Investing based on tips"],
        correctAnswer: "Investing in a market index, such as Nifty 50"
    },
    {
         question: "Which of the following is a microcap company?",
        choices: ["Company with market capitalization between 5001 to 20000 crore", "Company with market capitalization between 251 to 500 crore", "Company with market capitalization below 250 crore", "Company with market capitalization above ₹45,000 crore"],
        correctAnswer: "Company with market capitalization below 250 crore"
    },
    {
        question: "Which of the following is a small cap company?",
        choices: ["Company with market capitalization between 5001 to 20000 crore", "Company with market capitalization between 251 to 500 crore", "Company with market capitalization below 250 crore", "Company with market capitalization above ₹45,000 crore"],
        correctAnswer: "Company with market capitalization between 251 to 500 crore"
    },
    {
        question: "Which of the following is a mid cap company?",
        choices: ["Company with market capitalization between 5001 to 20000 crore", "Company with market capitalization between 251 to 500 crore", "Company with market capitalization below 250 crore", "Company with market capitalization above ₹45,000 crore"],
        correctAnswer: "Company with market capitalization between 5001 to 20000 crore"
    },
    {
        question: "Which of the following is a large cap company?",
        choices: ["Company with market capitalization between 5001 to 20000 crore", "Company with market capitalization between 251 to 500 crore", "Company with market capitalization below 250 crore", "Company with market capitalization above ₹45,000 crore"],
        correctAnswer: "Company with market capitalization above ₹45,000 crore"
    },
    {
        question: "Who is the current Governor of the Reserve Bank of India (RBI)?",
        choices: ["Urjit Patel", "Raghuram Rajan", "Shaktikanta Das", "Duvvuri Subbarao"],
        correctAnswer: "Shaktikanta Das"
    },
    {
        question: "What is 'NAV'?",
        choices: ["Net Advantage Value", "Net Assured Value", "New Account Value", "Net Asset Value"],
        correctAnswer: "Net Asset Value"
    },
    {
        question: "What does 'NFO' stand for in the context of mutual funds?",
        choices: ["New Fund Offer", "National Financial Organisation", "Nominal Fixed Offer", "Net Financial Outlook"],
        correctAnswer: "New Fund Offer"
    },
    {
        question: "What is 'Systematic Withdrawal Plan (SWP)'?",
        choices: ["Investing lump sum amount", "Withdrawing fixed amount regularly", "Investing fixed amount regularly", "Holding investment for specific period"],
        correctAnswer: "Withdrawing fixed amount regularly"
    },
   {
        question: "What is the full form of 'AMC' in the context of mutual funds?",
        choices: ["Asset Management Company", "Annual Maintenance Charges", "Average Maturity Cost", "Automated Money Control"],
        correctAnswer: "Asset Management Company"
    },
    {
        question: "Which of the following can affect stock prices?",
        choices: ["Company financial performance", "Economic news", "Investor sentiment", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "What does 'ROCE' stand for?",
        choices: ["Return on Capital Employed", "Revenue on Current Expenses", "Rate of Cash Earnings", "Risk of Corporate Exposure"],
        correctAnswer: "Return on Capital Employed"
    },
    {
        question: "What does 'EPS' mean?",
        choices: ["Earning Per Share", "Expense Per Share", "Equity Per Share", "Earning Price Share"],
        correctAnswer: "Earning Per Share"
    },
    {
        question: "What is the full form of 'CAGR'?",
        choices: ["Company Annual Growth Rate", "Cumulative Average Growth Rate", "Combined Annual Growth Result", "Consolidated Asset Growth Report"],
        correctAnswer: "Cumulative Average Growth Rate"
    },
    {
        question: "What does 'P/BV' Ratio stand for?",
        choices: ["Price to Book Value Ratio", "Price to Business Volume Ratio", "Profit Before Valuation Ratio", "Portfolio Beta Value Ratio"],
        correctAnswer: "Price to Book Value Ratio"
    },
    {
        question: "What is 'ROA'?",
        choices: ["Return on Assets", "Revenue on Assets", "Risk of Assets", "Rate on Assets"],
        correctAnswer: "Return on Assets"
    },
      {
        question: "What is 'Inflation'?",
        choices: ["Decrease in general price level", "Increase in the value of money", "Increase in general price level", "Decrease in the value of goods"],
        correctAnswer: "Increase in general price level"
    },
    {
        question: "Which of these is NOT a type of trading?",
        choices: ["Value Trading", "Intraday Trading", "Swing Trading", "Positional Trading"],
        correctAnswer: "Value Trading"
    },
    {
         question: "What is the time duration for short term capital gain?",
        choices: ["More than 36 months", "Between 12 to 36 months", "Less than 12 months", "More than 12 months"],
        correctAnswer: "Less than 12 months"
    },
    {
        question: "Which of these is NOT an exchange in India?",
        choices: ["BSE", "NSE", "MCX", "NASDAQ"],
        correctAnswer: "NASDAQ"
    },
    {
        question: "What does 'GDP' mean?",
        choices: ["Gross Domestic Profit", "Gross Depository Product", "Global Domestic Product", "Gross Domestic Product"],
        correctAnswer: "Gross Domestic Product"
    },
    {
       question: "Which of the following is a lagging indicator?",
        choices: ["Number of employees on payrolls", "Building permits", "New orders for durable goods", "Index of consumer expectations"],
        correctAnswer: "Number of employees on payrolls"
    },
    {
        question: "What is a margin call?",
        choices: ["When a broker asks an investor to deposit more money", "A request to buy a stock", "A notification of a successful trade", "A notice for dividend payment"],
        correctAnswer: "When a broker asks an investor to deposit more money"
    },
    {
        question: "What is 'face value' in Mutual Fund?",
        choices: ["The amount investor receives after maturity", "The actual price to purchase a share", "The stated amount of a share or unit", "The money left with mutual fund after expenses"],
        correctAnswer: "The stated amount of a share or unit"
    },
    {
        question: "What is the benefit of investing in ELSS mutual funds?",
        choices: ["Guaranteed returns", "Tax deduction under Section 80C", "Fixed interest rate", "No risk of loss"],
        correctAnswer: "Tax deduction under Section 80C"
    },
    {
        question: "What is 'circuit breaker'?",
        choices: ["A protection to protect against over current", "A trading halt used to curb panic-selling", "A protection to protect against short circuit", "A stock with high volatility"],
        correctAnswer: "A trading halt used to curb panic-selling"
    },
    {
        question: "What is the full form of CAGR in Mutual Funds?",
        choices: ["Compound Annual Gross Rate", "Compound Asset Growth Rate", "Cumulative Average Gross Rate", "Compound Annual Growth Rate"],
        correctAnswer: "Compound Annual Growth Rate"
    },
    {
        question: "What is the minimum age to open demat account in India?",
        choices: ["10 Years", "18 Years", "21 Years", "There is no age limit"],
        correctAnswer: "There is no age limit"
    },
        {
        question: "What does 'ROE' stand for?",
        choices: ["Return on Equity", "Return on Expenses", "Return on Earnings", "Return of Entitlement"],
        correctAnswer: "Return on Equity"
    },
    {
        question: "Which trading strategy involves holding a stock for a few days to weeks?",
        choices: ["Day trading", "Scalping", "Swing trading", "Position trading"],
        correctAnswer: "Swing trading"
    },
   {
        question: "Which of the following is NOT a type of market order?",
        choices: ["Limit order", "Market order", "Stop-loss order", "Guaranteed Stop-loss order"],
        correctAnswer: "Guaranteed Stop-loss order"
    },
    {
        question: "What is Open Interest?",
        choices: ["It indicates the volume of shares traded on stock market", "It indicates total outstanding derivative contracts", "It indicates the number of shareholders a company has", "It refers to the money an investor can lose on a particular investment"],
        correctAnswer: "It indicates total outstanding derivative contracts"
    },
    {
        question: "How long can you carry forward a loss on sale of property for adjustment against future gains?",
        choices: ["5 Years", "6 Years", "7 Years", "8 Years"],
        correctAnswer: "8 Years"
    },
    {
         question: "What does 'EOW' mean in the context of stock market?",
        choices: ["Entry of the week", "End of Weakness", "End of Week", "Equity on Watch"],
        correctAnswer: "End of Week"
    },
    {
        question: "What does 'BOT' mean in the context of stock market?",
        choices: ["Bought Over Time", "Bearish Over Time", "Buy on Trend", "Buy Outright Today"],
        correctAnswer: "Buy Outright Today"
    },
        {
         question: "The process of combining different companies is known as",
        choices: ["Liquidation", "Amalgamation", "Capitalisation", "Working capital"],
        correctAnswer: "Amalgamation"
    },
    {
         question: "How much of the stock market do FIIs account for?",
        choices: ["More than 50%", "25%", "Between 10% and 20%", "Less than 5%"],
        correctAnswer: "Between 10% and 20%"
    },
    {
         question: "What is used to measure inflation rates",
        choices: ["WPI", "CPI", "IIP", "Both WPI and CPI"],
        correctAnswer: "Both WPI and CPI"
    },
    {
         question: "What is the minimum net worth required for companies looking to launch an IPO",
        choices: ["Rs. 1 crore", "Rs. 3 crore", "Rs. 5 crore", "Rs. 10 crore"],
        correctAnswer: "Rs. 3 crore"
    }
];

// New configuration object for game settings
const gameConfig = {
    maxQuestions: 15,  // Maximum questions per game
    questionTimeout: 2000  // Time between questions in milliseconds
};

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const resultElement = document.getElementById("result");

function shuffleArray(array) {
    const shuffled = [...array]; // Create a copy of the array
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function initializeGame() {
    // Reset game state
    currentQuestionIndex = 0;
    score = 0;
    
    // Reset UI
    resultElement.textContent = '';
    answerButtonsElement.innerHTML = `
        <button class="answer-button" data-choice="A">A: </button>
        <button class="answer-button" data-choice="B">B: </button>
        <button class="answer-button" data-choice="C">C: </button>
        <button class="answer-button" data-choice="D">D: </button>
    `;
    
    // Get fresh shuffled questions
    currentQuestions = shuffleArray(allQuestions).slice(0, gameConfig.maxQuestions);
    
    // Bind click events to new buttons
    bindAnswerButtonEvents();
    
    loadQuestion();
}

function bindAnswerButtonEvents() {
    const buttons = answerButtonsElement.querySelectorAll('.answer-button');
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            if (!event.target.disabled) {
                const selectedAnswer = event.target.dataset.choice;
                checkAnswer(selectedAnswer);
            }
        });
    });
}

// Remove the global click event listener
// answerButtonsElement.addEventListener("click"...) should be removed

// Start the game when the page loads
window.addEventListener('load', initializeGame);

function loadQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        endGame();
        return;
    }

    const currentQuestion = currentQuestions[currentQuestionIndex];
    const shuffledChoices = shuffleArray(currentQuestion.choices);
    
    // Update question text with progress
    questionElement.textContent = `Question ${currentQuestionIndex + 1}/${currentQuestions.length}: ${currentQuestion.question}`;
    
    console.log(`Loading question ${currentQuestionIndex + 1} of ${currentQuestions.length}`); // Debug log

    const answerButtons = Array.from(answerButtonsElement.children);
    
    // Reset button states
    answerButtons.forEach(button => {
        button.classList.remove("correct", "incorrect");
        button.disabled = false;
    });

    // Clear previous result
    resultElement.textContent = "";

    // Update buttons with shuffled choices
    answerButtons.forEach((button, index) => {
        const choiceLetter = String.fromCharCode(65 + index);
        button.textContent = `${choiceLetter}: ${shuffledChoices[index]}`;
        button.dataset.choice = shuffledChoices[index];
    });
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    const answerButtons = Array.from(answerButtonsElement.children);

    // Disable all buttons immediately
    answerButtons.forEach(button => {
        button.disabled = true;
        
        if (button.dataset.choice === currentQuestion.correctAnswer) {
            button.classList.add("correct");
        } else if (button.dataset.choice === selectedAnswer && !isCorrect) {
            button.classList.add("incorrect");
        }
    });

    // Update score and show feedback
    if (isCorrect) {
        score++;
        resultElement.textContent = "Correct! 🎉";
    } else {
        resultElement.textContent = `Incorrect. The correct answer was: ${currentQuestion.correctAnswer}`;
    }

    // Move to next question or end game
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            loadQuestion();
        } else {
            endGame();
        }
    }, gameConfig.questionTimeout);
}


function generateShareText(score, totalQuestions, percentage) {
    return `🎯 I scored ${score}/${totalQuestions} (${percentage}%) in Stock Market Crorepati! Think you can beat my score? Take the challenge! #StockMarketCrorepati #FinancialLiteracy`;
}

function shareScore() {
  const shareText = generateShareText(
    score,
    currentQuestions.length,
    ((score / currentQuestions.length) * 100).toFixed(1)
  );
  const url = window.location.href;
  const encodedText = encodeURIComponent(shareText);
  const encodedUrl = encodeURIComponent(url);

  const shareArea = document.getElementById('share-area');
  shareArea.innerHTML += `
    <button onclick="window.open('https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}')">Share on Twitter</button>
    <button onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}')">Share on Facebook</button>
    <button onclick="window.open('https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}')">Share on LinkedIn</button>
    <button onclick="window.open('https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}')">Share on WhatsApp</button>

  `;

  // Instagram sharing using clipboard fallback method since there is no direct URL Scheme
  const instagramButton = document.createElement('button');
  instagramButton.textContent = 'Share on Instagram';
  instagramButton.addEventListener('click', () => {
    navigator.clipboard.writeText(shareText + ' ' + url)
      .then(() => {
        alert('Text copied to clipboard! Please paste into your Instagram post.');
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
        alert('Failed to copy to clipboard. Please try again.');
      });
  });
  shareArea.appendChild(instagramButton);
}

    // Check if Web Share API is supported
    if (navigator.share) {
        navigator.share({
    title: 'Stock Market Crorepati Score',
    text: shareText,
    url: window.location.href
})
        .catch(error => {
            console.log('Error sharing:', error);
            fallbackShare(shareText);
        });
    } else {
        fallbackShare(shareText);
    }
}

function fallbackShare(shareText) {
    // Fallback to clipboard copy
    navigator.clipboard.writeText(shareText)
        .then(() => {
            const confirmationEl = document.getElementById('share-confirmation');
            confirmationEl.textContent = 'Score copied to clipboard! 📋';
            setTimeout(() => {
                confirmationEl.textContent = '';
            }, 3000);
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
}

function endGame() {
    const percentage = ((score / currentQuestions.length) * 100).toFixed(1);
    questionElement.textContent = `Game Over! Your score: ${score} out of ${currentQuestions.length} (${percentage}%)`;
    
    // Clear answer buttons but maintain the container
    answerButtonsElement.innerHTML = '';
    
    resultElement.textContent = getFeedbackMessage(percentage);
    
    // Show share area with both buttons
    const shareArea = document.getElementById('share-area');
    shareArea.style.display = 'block';
    shareArea.innerHTML = `
        <button id="play-again" class="play-again-button">Play Again</button>
        <button id="share-button" class="share-button">Share Score</button>
        <p id="share-confirmation" class="share-confirmation"></p>
    `;
    
    // Add event listeners
    document.getElementById('play-again').addEventListener('click', () => {
        shareArea.style.display = 'none';
        initializeGame();
    });
    document.getElementById('share-button').addEventListener('click', shareScore);
}

function getFeedbackMessage(percentage) {
    if (percentage === 100) return "Perfect score! You're a Stock Market Expert! 🏆";
    if (percentage >= 80) return "Excellent! You really know your stuff! 🌟";
    if (percentage >= 60) return "Good job! Keep learning! 📚";
    if (percentage >= 40) return "Not bad! Keep studying! 📈";
    return "Keep studying the stock market basics! 💪";
}

function restartGame() {
    initializeGame();
}

// Event listener for answer buttons
answerButtonsElement.addEventListener("click", (event) => {
    if (event.target.classList.contains("answer-button") && !event.target.disabled) {
        const selectedAnswer = event.target.dataset.choice;
        checkAnswer(selectedAnswer);
    }
});

// Start the game when the page loads
window.addEventListener('load', () => {
    console.log('Game starting...'); // Debug log
    initializeGame();
});