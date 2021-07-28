import withRoot from './withRoot';
// --- Post bootstrap -----
import React from 'react';
import './style.css';


const Bbs = props => {
  return (
    <div class="board_list_wrap">
            <div class="board_list">    
                <div class="board_list_head">
                <div class = "num">번호</div>
                <div class = "tit">제목</div>
                <div class  = "writer">글쓴이</div>
                <div class = "date">작성일</div>
                <div class = "view">조회</div>
                </div>
                <div class="board_list_body">
                <div class="item">
                    <div class = "num">5</div>
                    <div class = "tit"><a href="#">"토익 스터디 구합니다."</a></div>
                    <div class  = "writer">22000510</div>
                    <div class = "date">2021-7-21</div>
                    <div class = "view">70</div>
                </div>
                <div class="item">
                    <div class = "num">4</div>
                    <div class = "tit"><a href="#">"데이타 구조 스터디 구합니다."</a></div>
                    <div class  = "writer">21700010</div>
                    <div class = "date">2021-7-23</div>
                    <div class = "view">31</div>
                </div>
                <div class="item">
                    <div class = "num">3</div>
                    <div class = "tit"><a href="#">"논설 스터디 구합니다."</a></div>
                    <div class  = "writer">21800630</div>
                    <div class = "date">2021-8-11</div>
                    <div class = "view">50</div>
                </div>
                <div class="item">
                    <div class = "num">2</div>
                    <div class = "tit"><a href="#">"면접 스터디 구합니다."</a></div>
                    <div class  = "writer">22100210</div>
                    <div class = "date"> 2021-8-12</div>
                    <div class = "view">33</div>
                </div>
                <div class="item">
                    <div class = "num">1</div>
                    <div class = "tit"><a href="#">"심리학계론 스터디 구합니다."</a></div>
                    <div class  = "writer">22000630</div>
                    <div class = "date">2021-8-12</div>
                    <div class = "view">27</div>
                </div>
                </div>
            </div>    
            <div class="paging">
                <a href="#" class="bt first">처음</a>
                <a href="#" class="bt prev"> 이전</a>
                <a href="#" class="num">1</a>
                <a href="#" class="num">2</a>
                <a href="#" class="num">3</a>
                <a href="#" class="bt next">다음</a>
                <a href="#" class="bt last"> 마지막</a>
            </div>
        </div>
  )
  }
 
export default Bbs;