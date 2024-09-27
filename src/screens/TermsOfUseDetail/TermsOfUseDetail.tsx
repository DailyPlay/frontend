import React, {useState} from 'react';
import * as s from './style';
import TextComponent from '@components/Text';
import ArrowIcons from '@assets/icons/arrow';
import theme from '@theme/theme';

const TermsOfUseDetail = () => {
  const [isDropdown, setIsDropdown] = useState(false);

  const onPressDropdown = () => {
    setIsDropdown(prev => !prev);
  };

  return (
    <s.Container>
      <s.SelectWrapper
        activeOpacity={1}
        isDropdown={isDropdown}
        onPress={onPressDropdown}>
        {isDropdown && (
          <s.DropdownWrapper showsVerticalScrollIndicator={false}>
            {Array.from({length: 5}, (_, i) => i).map((_, i) => (
              <s.DropdownItem isLast={i === 4} onPress={onPressDropdown}>
                <TextComponent fontType="labelMedium">
                  2024년 04월 10일 이용약관
                </TextComponent>
              </s.DropdownItem>
            ))}
          </s.DropdownWrapper>
        )}
        <TextComponent fontType="labelMedium">
          2024년 04월 10일 이용약관
        </TextComponent>
        <s.IconButtonWrapper>
          <ArrowIcons.ChevronDown />
        </s.IconButtonWrapper>
      </s.SelectWrapper>

      <s.DetailScroll showsVerticalScrollIndicator={false} bounces={false}>
        <TextComponent fontType="bodyMedium" color={theme.color.neutral400}>
          어플명에서 ○○○회원님의 개인정보에 접근합니다. 제공된 개인정보(이용자
          식별자 기본제공, 그 외 제공 항목이 있을 경우 아래 별도 기재)는 이용자
          식별, 통계, 계정 연동 및 CS등을 위해 서비스 이용기간동안
          활용/보관됩니다. 본 제공 동의를 거부할 권리가 있으나, 동의를 거부하실
          경우 서비스 이용이 제한될 수 있습니다. 어플명에서 ○○○회원님의
          개인정보에 접근합니다. 제공된 개인정보(이용자 식별자 기본제공, 그 외
          제공 항목이 있을 경우 아래 별도 기재)는 이용자 식별, 통계, 계정 연동
          및 CS등을 위해 서비스 이용기간동안 활용/보관됩니다. 본 제공 동의를
          거부할 권리가 있으나, 동의를 거부하실 경우 서비스 이용이 제한될 수
          있습니다. 어플명에서 ○○○회원님의 개인정보에 접근합니다. 제공된
          개인정보(이용자 식별자 기본제공, 그 외 제공 항목이 있을 경우 아래 별도
          기재)는 이용자 식별, 통계, 계정 연동 및 CS등을 위해 서비스
          이용기간동안 활용/보관됩니다. 본 제공 동의를 거부할 권리가 있으나,
          동의를 거부하실 경우 서비스 이용이 제한될 수 있습니다. 어플명에서
          ○○○회원님의 개인정보에 접근합니다. 제공된 개인정보(이용자 식별자
          기본제공, 그 외 제공 항목이 있을 경우 아래 별도 기재)는 이용자 식별,
          통계, 계정 연동 및 CS등을 위해 서비스 이용기간동안 활용/보관됩니다. 본
          제공 동의를 거부할 권리가 있으나, 동의를 거부하실 경우 서비스 이용이
          제한될 수 있습니다. 어플명에서 ○○○회원님의 개인정보에 접근합니다.
          제공된 개인정보(이용자 식별자 기본제공, 그 외 제공 항목이 있을 경우
          아래 별도 기재)는 이용자 식별, 통계, 계정 연동 및 CS등을 위해 서비스
          이용기간동안 활용/보관됩니다. 본 제공 동의를 거부할 권리가 있으나,
          동의를 거부하실 경우 서비스 이용이 제한될 수 있습니다.어플명에서
          ○○○회원님의 개인정보에 접근합니다. 제공된 개인정보(이용자 식별자
          기본제공, 그 외 제공 항목이 있을 경우 아래 별도 기재)는 이용자 식별,
          통계, 계정 연동 및 CS등을 위해 서비스 이용기간동안 활용/보관됩니다. 본
          제공 동의를 거부할 권리가 있으나, 동의를 거부하실 경우 서비스 이용이
          제한될 수 있습니다. 어플명에서 ○○○회원님의 개인정보에 접근합니다.
          제공된 개인정보(이용자 식별자 기본제공, 그 외 제공 항목이 있을 경우
          아래 별도 기재)는 이용자 식별, 통계, 계정 연동 및 CS등을 위해 서비스
          이용기간동안 활용/보관됩니다. 본 제공 동의를 거부할 권리가 있으나,
          동의를 거부하실 경우 서비스 이용이 제한될 수 있습니다. 어플명에서
          ○○○회원님의 개인정보에 접근합니다. 제공된 개인정보(이용자 식별자
          기본제공, 그 외 제공 항목이 있을 경우 아래 별도 기재)는 이용자 식별,
          통계, 계정 연동 및 CS등을 위해 서비스 이용기간동안 활용/보관됩니다. 본
          제공 동의를 거부할 권리가 있으나, 동의를 거부하실 경우 서비스 이용이
          제한될 수 있습니다. 어플명에서 ○○○회원님의 개인정보에 접근합니다.
          제공된 개인정보(이용자 식별자 기본제공, 그 외 제공 항목이 있을 경우
          아래 별도 기재)는 이용자 식별, 통계, 계정 연동 및 CS등을 위해 서비스
          이용기간동안 활용/보관됩니다. 본 제공 동의를 거부할 권리가 있으나,
          동의를 거부하실 경우 서비스 이용이 제한될 수 있습니다. 어플명에서
          ○○○회원님의 개인정보에 접근합니다. 제공된 개인정보(이용자 식별자
          기본제공, 그 외 제공 항목이 있을 경우 아래 별도 기재)는 이용자 식별,
          통계, 계정 연동 및 CS등을 위해 서비스 이용기간동안 활용/보관됩니다. 본
          제공 동의를 거부할 권리가 있으나, 동의를 거부하실 경우 서비스 이용이
          제한될 수 있습니다.
        </TextComponent>
      </s.DetailScroll>
    </s.Container>
  );
};

export default TermsOfUseDetail;
