<?php

require_once 'afabctimberland.civix.php';
use CRM_Afabctimberland_ExtensionUtil as E;

/**
 * Implements hook_civicrm_config().
 *
 * @link https://docs.civicrm.org/dev/en/latest/hooks/hook_civicrm_config/
 */
function afabctimberland_civicrm_config(&$config) {
  _afabctimberland_civix_civicrm_config($config);
}

/**
 * Implements hook_civicrm_xmlMenu().
 *
 * @link https://docs.civicrm.org/dev/en/latest/hooks/hook_civicrm_xmlMenu
 */
function afabctimberland_civicrm_xmlMenu(&$files) {
  _afabctimberland_civix_civicrm_xmlMenu($files);
}

/**
 * Implements hook_civicrm_install().
 *
 * @link https://docs.civicrm.org/dev/en/latest/hooks/hook_civicrm_install
 */
function afabctimberland_civicrm_install() {
  _afabctimberland_civix_civicrm_install();
}

/**
 * Implements hook_civicrm_postInstall().
 *
 * @link https://docs.civicrm.org/dev/en/latest/hooks/hook_civicrm_postInstall
 */
function afabctimberland_civicrm_postInstall() {
  _afabctimberland_civix_civicrm_postInstall();
}

/**
 * Implements hook_civicrm_uninstall().
 *
 * @link https://docs.civicrm.org/dev/en/latest/hooks/hook_civicrm_uninstall
 */
function afabctimberland_civicrm_uninstall() {
  _afabctimberland_civix_civicrm_uninstall();
}

/**
 * Implements hook_civicrm_enable().
 *
 * @link https://docs.civicrm.org/dev/en/latest/hooks/hook_civicrm_enable
 */
function afabctimberland_civicrm_enable() {
  _afabctimberland_civix_civicrm_enable();
}

/**
 * Implements hook_civicrm_disable().
 *
 * @link https://docs.civicrm.org/dev/en/latest/hooks/hook_civicrm_disable
 */
function afabctimberland_civicrm_disable() {
  _afabctimberland_civix_civicrm_disable();
}

/**
 * Implements hook_civicrm_upgrade().
 *
 * @link https://docs.civicrm.org/dev/en/latest/hooks/hook_civicrm_upgrade
 */
function afabctimberland_civicrm_upgrade($op, CRM_Queue_Queue $queue = NULL) {
  return _afabctimberland_civix_civicrm_upgrade($op, $queue);
}

/**
 * Implements hook_civicrm_managed().
 *
 * Generate a list of entities to create/deactivate/delete when this module
 * is installed, disabled, uninstalled.
 *
 * @link https://docs.civicrm.org/dev/en/latest/hooks/hook_civicrm_managed
 */
function afabctimberland_civicrm_managed(&$entities) {
  _afabctimberland_civix_civicrm_managed($entities);
}

/**
 * Implements hook_civicrm_caseTypes().
 *
 * Generate a list of case-types.
 *
 * Note: This hook only runs in CiviCRM 4.4+.
 *
 * @link https://docs.civicrm.org/dev/en/latest/hooks/hook_civicrm_caseTypes
 */
function afabctimberland_civicrm_caseTypes(&$caseTypes) {
  _afabctimberland_civix_civicrm_caseTypes($caseTypes);
}

/**
 * Implements hook_civicrm_angularModules().
 *
 * Generate a list of Angular modules.
 *
 * Note: This hook only runs in CiviCRM 4.5+. It may
 * use features only available in v4.6+.
 *
 * @link https://docs.civicrm.org/dev/en/latest/hooks/hook_civicrm_angularModules
 */
function afabctimberland_civicrm_angularModules(&$angularModules) {
  _afabctimberland_civix_civicrm_angularModules($angularModules);
}

/**
 * Implements hook_civicrm_alterSettingsFolders().
 *
 * @link https://docs.civicrm.org/dev/en/latest/hooks/hook_civicrm_alterSettingsFolders
 */
function afabctimberland_civicrm_alterSettingsFolders(&$metaDataFolders = NULL) {
  _afabctimberland_civix_civicrm_alterSettingsFolders($metaDataFolders);
}

/**
 * Implements hook_civicrm_entityTypes().
 *
 * Declare entity types provided by this module.
 *
 * @link https://docs.civicrm.org/dev/en/latest/hooks/hook_civicrm_entityTypes
 */
function afabctimberland_civicrm_entityTypes(&$entityTypes) {
  _afabctimberland_civix_civicrm_entityTypes($entityTypes);
}

/**
 * Implements hook_civicrm_thems().
 */
function afabctimberland_civicrm_themes(&$themes) {
  _afabctimberland_civix_civicrm_themes($themes);
}

// --- Functions below this ship commented out. Uncomment as required. ---

/**
 * Implements hook_civicrm_preProcess().
 *
 * @link https://docs.civicrm.org/dev/en/latest/hooks/hook_civicrm_buildForm
 */
function afabctimberland_civicrm_buildForm($formName, &$form) {
  if ($formName === 'CRM_Event_Form_Registration_AdditionalParticipant') {
    $familySocialEventType = CRM_Core_PseudoConstant::getKey('CRM_Event_BAO_Event', 'event_type_id', 'Family Social');
    if ($form->_values['event']['event_type_id'] == $familySocialEventType) {
      CRM_Core_Resources::singleton()->addScriptFile('biz.jmaconsulting.afabctimberland', 'js/additionalParticipants.js');
      $form->add('select', 'additional_registration_type', E::ts('Is this a registration for an additional partner/parent or child?'), [
        1 => E::ts('Partner'),
        2 => E::ts('Child'),
        3 => E::ts('Additional/Accompanying Adult'),
      ], TRUE);
      CRM_Core_Region::instance('form-body')->add([
        'template' => 'CRM/Event/Form/Registration/AdditionalRegistrationType.tpl',
      ]);
    }
  }
}

function afabctimberland_civicrm_postProcess($formName, &$form) {
  if ($formName === 'CRM_Event_Form_Registration_Confirm') {
    $familySocialEventType = CRM_Core_PseudoConstant::getKey('CRM_Event_BAO_Event', 'event_type_id', 'Family Social');
    if ($form->_values['event']['event_type_id'] == $familySocialEventType) {
      $primaryPartner = $form->get('primaryContactId');
      $partners = $children = [];
      // Create Relationships as necessary.
      foreach ($form->_values['params'] as $particpantId => $formParams) {
        if (!empty($formParams['additional_registration_type'])) {
          $participantDetails = civicrm_api3('Participant', 'getsingle', ['id' => $particpantId]);
          if ($formParams['additional_registration_type'] == 1) {
            $partners[] = $participantDetails['contact_id'];
            $relationship_type_id = civicrm_api3('RelationshipType', 'getsingle', ['name_a_b' => 'Partner Of'])['id'];
            $relationshipParams = [
              'contact_id_a' => $participantDetails['contact_id'],
              'contact_id_b' => $primaryPartner,
              'relationship_type_id' => $relationship_type_id,
            ];
            $relationshipCheck = civicrm_api3('Relationship', 'get', $relationshipParams);
            if (empty($relationshipCheck['count'])) {
              $relationshipParams['start_date'] = date('Y-m-d');
              civicrm_api3('Relationship', 'create', $relationshipParams);
            }
          }
          elseif ($formParams['additional_registration_type'] == 2) {
            $children[] = $participantDetails['contact_id'];
          }
        }
      }
      foreach ($children as $child) {
        $relationship_type_id = civicrm_api3('RelationshipType', 'getsingle', ['name_a_b' => 'Child Of'])['id'];
        civicrm_api3('Contact', 'create', [
          'do_not_email' => 1,
          'do_not_phone' => 1,
          'do_not_trade' => 1,
          'do_not_sms' => 1,
          'is_opt_out' => 1,
          'contact_id' => $child,
          'contact_type' => 'Individual',
        ]);
        $relationshipParams = [
          'contact_id_a' => $child,
          'relationship_type_id' => $relationship_type_id,
          'contact_id_b' => $primaryPartner,
        ];
        $relationshipCheck = civicrm_api3('Relationship', 'get', $relationshipParams);
        if (empty($relationshipCheck)) {
          $relationshipParams['start_date'] = date('Y-m-d');
          civicrm_api3('Relationship', 'create', $relationshipParams);
        }
        if (!empty($partners)) {
          foreach ($partners as $partner) {
            unset($relationshipParams['start_date']);
            $relationshipParams['contact_id_b'] = $partner;
            $relationshipCheck = civicrm_api3('Relationship', 'get', $relationshipParams);
            if (empty($relationshipCheck)) {
              $relationshipParams['start_date'] = date('Y-m-d');
              civicrm_api3('Relationship', 'create', $relationshipParams);
            }
          }
        }
      }
    }
  }
}
