import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Company, ReduxState } from './types'
import { getCompanies, getIsDropdownMenuVisible } from './selectors'
import { toggleDropdownMenuVisibility } from './actions'

import DropdownMenu from './DropdownMenu'

type ReduxProps = {
  isDropdownMenuVisible: boolean,
  selectedCompanyId: number | null,
  companies: Array<Company>,
}

type DispatchProps = {
  toggleDropdownMenuVisibility: () => void,
}

export const DropdownLink = ({ isDropdownMenuVisible, selectedCompanyId, companies, toggleDropdownMenuVisibility }: ReduxProps & DispatchProps) => {
  const [selectedCompanyName, setSelectedCompanyName] = useState<string>('');
  useEffect(() => {
    const selectedCompany = companies.filter((company) => company.id === selectedCompanyId);
    let companyName = '';
    if (selectedCompany && selectedCompany.length) {
      companyName = selectedCompany[0].name;
    }
    setSelectedCompanyName(companyName);
  }, [selectedCompanyId, companies]);

  return (
    <>
      <div className="nav__link" onClick={toggleDropdownMenuVisibility} data-test-nav-link>
        <div className="nav__link-text-wrapper">
          <div className="nav__link-text">
            Elon Musk
          </div>

          <div className="nav__link-subtext">
            {selectedCompanyName}
          </div>
        </div>

        <i className="material-icons-outlined nav__link-icon">
          settings
        </i>
      </div>

      {isDropdownMenuVisible && <DropdownMenu />}
    </>
  )
};

export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    isDropdownMenuVisible: getIsDropdownMenuVisible,
    companies: getCompanies,
    selectedCompanyId: (state: ReduxState) => state.selectedCompanyId,
  }),
  { toggleDropdownMenuVisibility }
)(DropdownLink)
