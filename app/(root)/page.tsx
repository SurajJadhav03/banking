import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';


const Home = () => {

    const loggedIn = {firstName: 'Suraj', lastName: 'Jadhav', email:'sj555182@gmail.com'};
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                    type='greeting'
                    title="Welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext="Access and manage your account and transactions effciently."
                />

                <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250}
                />
            </header>
                RECENT TRANSACTIONS
        </div>
                <RightSidebar
                    user={loggedIn}
                    transactions={[]}
                    banks={[{currentBalance: 123.50},{currentBalance: 456.87}]}
                />
    </section>
  )
}

export default Home