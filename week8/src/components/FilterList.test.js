import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { members } from '../assets/members';
import FilterList from './FilterList';

describe('FilterList 테스트', () => {
  let items;

  // 테스트 실행 전 데이터 초기화
  beforeAll(() => {
    items = members;
  });

  it('초기 렌더링 시, 일부 멤버 이름들이 표시되는지 확인', () => {
    render(<FilterList items={items} />);
    // 모든 멤버를 검증하기엔 많으니 몇 명만 확인
    expect(screen.getByText('강민하')).toBeInTheDocument();
    expect(screen.getByText('김가현')).toBeInTheDocument();
    expect(screen.getByText('한수정')).toBeInTheDocument();
  });

  it('검색어 입력 시 필터링 동작 확인', () => {
    render(<FilterList items={items} />);
    const input = screen.getByLabelText('Search Input');

    // "김"을 입력하면 "김"으로 시작하는 멤버들만 필터링되어야 함
    fireEvent.change(input, { target: { value: '김' } });

    // "김"이 포함된 이름 예: "김가연", "김가현" 등이 있어야 하고
    expect(screen.queryByText('김가연')).toBeInTheDocument();
    expect(screen.queryByText('김가현')).toBeInTheDocument();

    // "강민하" 등 김으로 시작하지 않는 멤버는 표시되지 않아야 함
    expect(screen.queryByText('강민하')).not.toBeInTheDocument();
    expect(screen.queryByText('한수정')).not.toBeInTheDocument();
  });

  it('검색어 제거 시 모든 아이템 복원', () => {
    render(<FilterList items={items} />);
    const input = screen.getByLabelText('Search Input');

    // 먼저 "김"으로 필터링
    fireEvent.change(input, { target: { value: '김' } });
    expect(screen.queryByText('김가연')).toBeInTheDocument();
    expect(screen.queryByText('강민하')).not.toBeInTheDocument();

    // 검색어 제거
    fireEvent.change(input, { target: { value: '' } });

    // 다시 "강민하" 등의 다른 멤버도 표시되어야 함
    expect(screen.getByText('강민하')).toBeInTheDocument();
    expect(screen.getByText('한수정')).toBeInTheDocument();
  });

  it('검색 결과 없을 시 "No items found" 표시', () => {
    render(<FilterList items={items} />);
    const input = screen.getByLabelText('Search Input');

    // "zzz"라는 문자열은 어떤 이름에도 없다고 가정
    fireEvent.change(input, { target: { value: '정건' } });

    expect(screen.getByText('No items found')).toBeInTheDocument();

    // "강민하", "김가현" 등 기존 멤버 이름은 표시되지 않음
    expect(screen.queryByText('강민하')).not.toBeInTheDocument();
    expect(screen.queryByText('김가현')).not.toBeInTheDocument();
  });
});
