import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function AdminHome() {
  const { t } = useTranslation();

  return (
    <div>
      <Button as={Link} to="/lisa-toode" variant="primary">{t("add-product")}</Button>{' '}
      <Button as={Link} to="/halda-tooted" variant="secondary">Tooteid haldama</Button>{' '}
      <Button as={Link} to="/halda-tootajad" variant="success">Töötajat haldama</Button>{' '}
      <Button as={Link} to="/halda-hinnad" variant="warning">Hindu haldama</Button>{' '}
      <Button as={Link} to="/halda-esindused" variant="info">Esindusi haldama</Button>{' '}
    </div>
  )
}

export default AdminHome