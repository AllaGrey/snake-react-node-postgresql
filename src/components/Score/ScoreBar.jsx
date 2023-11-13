import { ScoreBarContainer, TopScores, Score, ScoreType } from "./ScoreBar.styled";
import PropTypes from 'prop-types';

export const ScoreBar = ({ scoresData }) => {
    
    const { topScores, userMaxScore } = scoresData.data;

    return (
        <>
            {scoresData &&
                <ScoreBarContainer>
                    {topScores.map((score, index) =>
                        <TopScores key={index}>
                            <ScoreType>{index + 1}. {score.user}: <Score>{score.score}</Score></ScoreType>
                        </TopScores>)}
                    <ScoreType>Personal best score: <Score>{userMaxScore.score}</Score></ScoreType>
                </ScoreBarContainer>
            }
        </>
    )
}

ScoreBar.propTypes = {
    scoresData: PropTypes.shape({
        data: PropTypes.shape({
            topScores: PropTypes.array.isRequired,
            userMaxScore: PropTypes.shape({
                score: PropTypes.number.isRequired,
            }).isRequired,
        }).isRequired,
    })
}