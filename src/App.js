import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import { useTranslation } from "react-i18next";
import './App.css';

function App() {
	const { t, i18n } = useTranslation();

	const changeLanguage = lng => {
		i18n.changeLanguage(lng);
  };

  // defines the color of the link, its text and where it points to in the menu
  const links = [{ href: "", color: "hover-my-blue", text: t("me") },
  							 { href: "", color: "hover-my-pink", text: t("projects") },
  							 { href: "", color: "hover-light-blue", text: t("contacts") }];

  return (
	<div>
	  <Header changeLanguage={changeLanguage} />
	  <Menu links={links} />
	  <Footer content={t("footer")}/>
	</div>
  );
}

export default App;
