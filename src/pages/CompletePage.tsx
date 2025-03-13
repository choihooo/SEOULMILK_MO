import { useNavigate } from "react-router-dom";
import { useNtsTaxStore } from "@/stores/ntsTax";

function CompletePage() {
  const { totalCnt } = useNtsTaxStore();
  const navigate = useNavigate();

  const handleConfirmClick = () => {
    navigate("/upload");
  };

  return (
    <div className="container center flex-col relative">
      <div className="center flex-col">
        <img src="/con.svg" alt="완료" />
        <div className="h2 text-grayScale-900">등록 완료</div>
        <div className="b4 text-grayScale-600">
          사진 {totalCnt}장이 컴퓨터에 등록되었습니다.
        </div>
        <div className="b4 text-grayScale-600">
          이후에는 컴퓨터에서 진행해주세요.
        </div>
      </div>
      <div className="absolute w-full px-[22px] bottom-7">
        <button
          className="h-14 bg-secondary-500 rounded-[12px] text-white w-full center"
          onClick={handleConfirmClick}
        >
          확인
        </button>
      </div>
    </div>
  );
}

export default CompletePage;
