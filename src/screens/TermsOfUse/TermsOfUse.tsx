import React, {useCallback, useMemo, useState} from 'react';
import {Image} from 'react-native';

// import style
import * as s from './style';
import theme from '@/theme/theme';

// import component
import Button from '@/components/Button';
import ArrowIcons from '@/assets/icons/arrow';
import TextComponent from '@/components/Text';
import CheckBoxIcons from '@/assets/icons/checkBox';

// import type
import {
  ICheckBoxButton,
  IAgreementListType,
  IAgreementButtonType,
} from './termsOfUseType';

const listRows: IAgreementListType[] = [
  {isRequired: true, label: '하루플레이 이용 약관 동의', isAgree: false},
  {isRequired: true, label: '개인정보 수집 및 이용 동의', isAgree: false},
  {isRequired: false, label: '마케팅 정보 수신 동의', isAgree: false},
];

const TermsOfUse = () => {
  const [agreeList, setAgreeList] = useState<IAgreementListType[]>(listRows);

  const backgroundImage = require('@assets/images/logo/threeSymbols.png');
  const imgLogos = Image.resolveAssetSource(backgroundImage);

  const isTotalCheck = useMemo(
    () => [...agreeList.filter(v => v.isRequired)].every(v => v.isAgree),
    [agreeList],
  );

  const onHandleTotalCheck = useCallback(() => {
    const temp = [...agreeList].map(v => ({...v, isAgree: !isTotalCheck}));
    setAgreeList(temp);
  }, [agreeList, isTotalCheck]);

  const onHandleSelect = (idx: number) => {
    const temp = [...agreeList];
    temp[idx].isAgree = !agreeList[idx].isAgree;
    setAgreeList(temp);
  };

  return (
    <s.Container>
      <s.TextWrapper>
        <TextComponent fontType="headlineSmall">
          {`원활한 이용을 위하여\n이용약관에 동의해 주세요.`}
        </TextComponent>
      </s.TextWrapper>

      <s.LogoWrapper source={{uri: imgLogos.uri}} />

      <s.AgreementWrapper>
        <s.TotalAgreeBox>
          <CheckBoxButton active={isTotalCheck} onPress={onHandleTotalCheck} />
          <TextComponent color={theme.color.blue500} fontType="buttonLarge">
            약관 전체 동의
          </TextComponent>
        </s.TotalAgreeBox>
        {agreeList.map((v, i) => (
          <PartialAgreement {...v} onPress={() => onHandleSelect(i)} />
        ))}
      </s.AgreementWrapper>

      <s.ContinueButtonBox>
        <Button.Gradient label="계속하기" onPress={() => console.log('짜잔')} />
      </s.ContinueButtonBox>
    </s.Container>
  );
};

const PartialAgreement = (props: IAgreementButtonType) => {
  const {isRequired, label, isAgree, onPress} = props;

  return (
    <s.PartialAgreementWrapper>
      <s.PartialAgreementBox>
        <CheckBoxButton active={isAgree} onPress={onPress} />
        <s.PartialTextBox>
          <TextComponent
            fontType="buttonMedium"
            color={isRequired ? theme.color.blue500 : theme.color.black}>
            [{isRequired ? '필수' : '선택'}]
          </TextComponent>
          <TextComponent fontType="buttonMedium">{label}</TextComponent>
        </s.PartialTextBox>
        <s.IconButtonWrapper>
          <ArrowIcons.ChevronRight color={theme.color.neutral300} />
        </s.IconButtonWrapper>
      </s.PartialAgreementBox>
    </s.PartialAgreementWrapper>
  );
};

const CheckBoxButton = ({active, onPress}: ICheckBoxButton) => {
  return (
    <s.IconButtonWrapper onPress={onPress}>
      {active ? <CheckBoxIcons.Active /> : <CheckBoxIcons.InActive />}
    </s.IconButtonWrapper>
  );
};

export default TermsOfUse;
