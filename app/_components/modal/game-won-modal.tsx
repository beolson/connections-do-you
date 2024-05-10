import { Word } from "@/app/_types";
import ControlButton from "../button/control-button";
import GuessHistory from "../guess-history";
import GameModal from "./game-modal";

type GameWonModalProps = {
  isOpen: boolean;
  onClose: () => void;
  guessHistory: Word[][];
  perfection: string;
};

export default function GameWonModal(props: GameWonModalProps) {
  return (
    <GameModal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="items-center justify-center px-2">

        <hr className="mb-2 md:mb-4 w-full"></hr>


        <div className="float-right"><GuessHistory guessHistory={props.guessHistory} /></div>

        <p className="text-black mb-4">
          Dana</p>
        <p className="text-black mb-4">
          Throughout our relationship, I have been constantly amazed at your strength and your 
          willingness to sacrifice for the good of others. Your empathy shines through.
        </p>
        <p className="text-black mb-4">
          Our weekend morning coffee is the highlight of my week.  Being able to talk with 
          someone like I can with you is a blessing and one I am grateful for.
        </p>
        <p className="text-black mb-4">
          All of this, and so much more is why I love you - and that love grows stronger.
        </p>
        <p className="text-black mb-4">
          Getting to know you and the girls has been one of the best experiences of my life.  
          I know my place is here with you.  Let’s make this official.  <b>Will you Marry Me?</b>

        </p>

      </div>
    </GameModal>
  );
}
