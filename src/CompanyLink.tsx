
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Company, ReduxState } from './types'
import { isCompanySelected } from './selectors'
import { toggleDropdownMenuVisibility, setSelectedCompanyId } from './actions'

type ReduxProps = {
  companySelected: boolean,
}

type DispatchProps = {
  toggleDropdownMenuVisibility: () => void,
  setSelectedCompanyId: (companyId: number) => void,
}

const CompanyLink = ({ id, name, companySelected, toggleDropdownMenuVisibility, setSelectedCompanyId }: Company & DispatchProps & ReduxProps) => {

  const handleCompanyLinkClick = () => {
    setSelectedCompanyId(id);
    toggleDropdownMenuVisibility();
  }

  return (
    <div className={`company-menu-link menu-item ${companySelected ? 'selected' : ''}`} onClick={handleCompanyLinkClick}>{name}</div>
  );
}

export default connect(
  createStructuredSelector<ReduxState, Company, ReduxProps>({
    companySelected: (state: ReduxState, props: Company) => isCompanySelected(state, { company: { id: props.id, name: props.name } }),
  }),
  {
    toggleDropdownMenuVisibility,
    setSelectedCompanyId,
  }
)(CompanyLink)