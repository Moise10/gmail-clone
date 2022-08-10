import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import EmailList from './components/EmailList/EmailList'
import Mail from './components/Mail/Mail'
import SendMail from './components/SendMail/SendMail'


function App() {
  return (
		<div className="app">
			<Header />
			<div className="app__body">
				<Sidebar />
				<Routes>
					<Route path="/mail" element={<Mail />} />
					<Route path="/" element={<EmailList />} />
				</Routes>
        <SendMail />
			</div>
		</div>
	);
}

export default App;
