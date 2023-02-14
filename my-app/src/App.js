import React from 'react';
import GameWindow from './components/game_window/GameWindow';
import HeaderComponent from './components/header/Header';
import {
	StyledApp,
	Header,
	GameWindowContainer,
} from './components/styled_components/appStyles';
import GameController from './GameController';

function App() {
	return (
		<GameController>
			<StyledApp>
				<HeaderComponent>
					<Header />
				</HeaderComponent>
				<GameWindowContainer>
					<GameWindow />
				</GameWindowContainer>
			</StyledApp>
		</GameController>
	);
}

export default App;
