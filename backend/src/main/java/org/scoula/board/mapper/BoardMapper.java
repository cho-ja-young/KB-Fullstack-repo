package org.scoula.board.mapper;

import org.apache.ibatis.annotations.Select;
import org.scoula.board.domain.BoardAttachmentVO;
import org.scoula.board.domain.BoardVO;
import org.scoula.common.pagination.PageRequest;

import java.util.List;

public interface BoardMapper {
    int getTotalCount();
    List<BoardVO> getPage(PageRequest pageRequest);

    List<BoardVO> getList();

    BoardVO get(Long no);

    void create(BoardVO board);

    int update(BoardVO board);

    int delete(Long no);

    /* 첨부파일 관련 메서드 추가 */
    // 첨부파일 등록
    void createAttachment(BoardAttachmentVO attach);

    // 특정 게시글의 첨부 파일 목록 조회
    List<BoardAttachmentVO> getAttachmentList(Long bno);

    // 특정 첨부 파일 1개 조회
    BoardAttachmentVO getAttachment(Long no);

    // 특정 첨부 파일 1개 삭제
    int deleteAttachment(Long no);
}
