import S from './style.module.css'

/**
 * ProfileCardProps 인터페이스 정의
 * - name
 * - role
 * - isNew
 * - isBest
 */

interface ProfileCardProps {
  name: string;
  role: string;
  isNew?: boolean;
  isBest?: boolean;
}
// function ProfileCard(props: ProfileCardProps) {
function ProfileCard({ name, role, isNew = false, isBest = false}: ProfileCardProps) {
  // 조건문은 함수 몸체(body) 안에서 사용
  let newBadge = null
  if (isNew) {
    newBadge = (
      <span className={`${S.badge} ${S.badgeNew}`} aria-label="신규 입사자">
        NEW
      </span>
    );
  }

  let bestBedge = null;
  if (isBest) {
    bestBedge = (
      <span className={`${S.badge} ${S.badgeBest}`} aria-label="우수 사원">
        BEST
      </span>
    );
  }

  // JSX 내부에서는 문을 사용할 수 없다.
  return (
    <article className={S.card}>
      <header className={S.header}>
        <h3 className={S.name}>{name}</h3>
        {newBadge}
        {bestBedge}
      </header>
      <p className={S.role}>{role}</p>
    </article>
  );

  // return (
  //   <article className={S.card}>
  //     <header className={S.header}>
  //       <h3 className={S.name}>{name}</h3>
  //       {isNew && (
  //         <span className={`${S.badge} ${S.badgeNew}`} aria-label="신규 입사자">
  //           NEW
  //         </span>
  //       )}

  //       {isBest && (
  //         <span className={`${S.badge} ${S.badgeBest}`} aria-label="우수 사원">
  //           BEST
  //         </span>
  //       )}
  //     </header>
  //     <p className={S.role}>{role}</p>
  //   </article>
  // );
}

export default ProfileCard
